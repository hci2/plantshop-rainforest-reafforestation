import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from "../../model/country";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  orders: Array<Order>;
  currentOrder: Order;
  countries: Country[];
  columnsHeader = ["Donate", "Country", "Flag", "Description", "Rainforest"];
  columnsKey = ["label", "flagUrl", "description", "imgUrl"];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private orderService: OrderService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.currentOrder = this.orderService.getCurrentOrder();
    this.getAndSetCountries();
  }

  private getAndSetCountries() {
    this.httpService.getCountries().subscribe((data: Array<Country>) => this.countries = data);
  }

  onSelectDonation() {
    this.orderService.removeOrder(this.currentOrder);
    this.toastService.display();
    this.router.navigate(['/overview']);
  }

}
