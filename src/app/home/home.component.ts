import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Order} from "../model/order";
import {Router} from "@angular/router";
import {HttpService} from "../service/http.service";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders: Array<Order> = new Array<Order>();
  checkoutOrderForm;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService, private router: Router) {
    this.checkoutOrderForm = this.formBuilder.group({
      id: '',
    });
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    // this.orderService.removeAllOfLocalStorage();
  }

  onSubmitRedeemedOrder(customerData: Order) {
    console.warn('Your orderService has been submitted', customerData);
    // PRODUCES DOUBLE VALUES
    // this.orders.push(customerData);
    this.orderService.setOrder(customerData);
    this.checkoutOrderForm.reset();
  }

  routeToOverview() {
    if (this.orders.length > 0) {
      this.orderService.setOrders(this.orders)
      this.orderService.setIsRandomOrders(false);
    } else {
      this.orderService.setRandomOrders();
      this.orderService.setIsRandomOrders(true);
    }
    this.router.navigateByUrl("/overview");
  }
}
