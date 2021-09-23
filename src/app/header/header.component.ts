import { Component, OnInit } from '@angular/core';
import {HttpService} from "../service/http.service";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Plantshop Rainforest Reafforestation';

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  checkForRandomOrders() {
    this.orderService.checkIsRandomOrdersAndInCaseCreateRandomOrders();
  }
}
