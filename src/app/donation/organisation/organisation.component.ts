import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Organisation} from "../../model/organisation";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  orders: Array<Order>;
  currentOrder: Order;
  organisations: Array<Organisation>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private httpService: HttpService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.currentOrder = this.orderService.getCurrentOrder();
    this.getAndSetOrganisations();
  }

  private getAndSetOrganisations() {
    this.httpService.getOrganisations().subscribe((data: Array<Organisation>) => this.organisations = data);
  }

  onSelectDonation() {
    this.orderService.removeOrder(this.currentOrder);
    this.toastService.display();
    this.router.navigate(['/overview']);
  }
}
