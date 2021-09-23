import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {Order} from '../model/order';
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  orders: Array<Order>;
  currentOrder: Order;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.currentOrder = this.orderService.getCurrentOrder();
  }

}
