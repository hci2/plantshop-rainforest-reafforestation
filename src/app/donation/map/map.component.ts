import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from '../../model/country';
import {ToastService} from "../../service/toast.service";
import {PageScrollService} from "ngx-page-scroll-core";
import {OrderService} from "../../service/order.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  orders: Array<Order>;
  currentOrder: Order;

  initialZoom = 2.8;
  initialLat = 8.195179;
  initialLng = 21.193984;
  countries: Array<Country>;
  selectedCountry: Country;
  // defaultIconUrl: string = 'https://image.flaticon.com/icons/png/128/1412/1412808.png';
  defaultIconUrl: string = 'https://www.weforest.org/map_ecosia/marker/marker_green_tree_47_30.png';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private orderService: OrderService,
              private toastService: ToastService,
              private pageScrollService: PageScrollService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.currentOrder = this.orderService.getCurrentOrder();
    this.getAndSetCountries();
  }

  getAndSetCountries() {
    return this.httpService.getCountries().subscribe((data: Array<Country>) => this.countries = data);
  }

  onSelectDonation() {
    this.orderService.removeOrder(this.currentOrder);
    this.toastService.display();
    this.router.navigate(['/overview']);
  }

  onSelectMarker(id: number) {
    this.selectedCountry = this.countries[id];

    this.pageScrollService.scroll({
      document: document,
      scrollTarget: '#anchorSelCountry',
    });
  }
}
