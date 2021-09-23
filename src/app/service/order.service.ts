import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService} from "ngx-webstorage-service";
import {UuidGeneratorService} from "./uuid-generator.service";
import {Order} from "../model/order";

const STORAGE_KEY_CURRENT_ORDER = 'storage_current_order';
const STORAGE_KEY_ORDERS = 'storage_orders';
const STORAGE_KEY_IS_RANDOM_ORDERS = 'storage_random_orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private isRandomOrders: boolean = false;
  private orders: Array<Order> = new Array<Order>();
  private currentOrder: Order = null;

  // LOCAL STORAGE
  // constructor(private uuidGeneratorService: UuidGeneratorService, @Inject(LOCAL_STORAGE) private storageService: StorageService) {
  // }

  constructor(private uuidGeneratorService: UuidGeneratorService, @Inject(SESSION_STORAGE) private storageService: StorageService) {
  }

  checkIsRandomOrdersAndInCaseCreateRandomOrders(){
    let isRandomOrders = this.getIsRandomOrders();
    console.log(isRandomOrders);
    if(isRandomOrders || isRandomOrders == undefined){
      this.setRandomOrders();
      this.setIsRandomOrders(true);
    }
  }

  getIsRandomOrders(){
    console.log("Getting is random orders ...");
    this.isRandomOrders = this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS);
    console.log(this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS) || 'Local storage is random orders is empty');
    return this.isRandomOrders;
  }

  setIsRandomOrders(isRandomOrders: boolean){
    console.log("Saving is random orders ...");
    this.isRandomOrders = isRandomOrders;
    this.storageService.set(STORAGE_KEY_IS_RANDOM_ORDERS, this.isRandomOrders);
    console.log(this.storageService.get(STORAGE_KEY_IS_RANDOM_ORDERS) || 'Local storage is random orders is empty');
  }

  setOrders(orders: Array<Order>){
    console.log("Saving orders ...");
    this.orders = orders;
    this.currentOrder = this.orders[0];
    this.saveAllToLocalStorage()
  }

  setOrder(order: Order){
    console.log("Saving order ...");
    this.orders.push(order);
    this.currentOrder = this.orders[0];
    this.saveAllToLocalStorage()
  }

  getOrders(): Order[] {
    console.log("Loading orders ...");
    this.loadOrdersFromLocalStorage();
    if(!this.orders){
      this.orders = new Array<Order>();
    }
    return this.orders;
  }

  isOrdersOrCurrentOrderEmpty(): boolean{
    return this.isLocalStorageEmpty();
  }

  removeOrder(order: Order) {

    console.log("Removing order ...");
    this.loadOrdersFromLocalStorage();

    this.orders.forEach((item, index) => {
      if (Object.is(item.id, order.id)) {
        this.orders.splice(index, 1);
        this.currentOrder = this.orders.length > 0 ? this.orders[0] : null;
        console.log('Removed order: ' + item.id);
        this.saveAllToLocalStorage();
      }
    });
    console.log('Removing not working for order: ' + order.id);
  }

  setRandomOrders(){
    console.log("Saving random orders ...");
    this.orders = this.uuidGeneratorService.getUuids(this.uuidGeneratorService.getRandomAmount());
    this.currentOrder = this.orders[0];
    this.saveAllToLocalStorage()
  }

  getCurrentOrder(): Order {
    this.loadCurrentOrderFromLocalStorage();
    return this.currentOrder;
  }

  private loadCurrentOrderFromLocalStorage() {
    this.currentOrder = this.storageService.get(STORAGE_KEY_CURRENT_ORDER);
    console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
  }

  private loadOrdersFromLocalStorage() {
    this.orders = this.storageService.get(STORAGE_KEY_ORDERS);
    console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
  }

  private isLocalStorageEmpty(): boolean {
    return this.storageService.has(STORAGE_KEY_ORDERS) || this.storageService.has(STORAGE_KEY_CURRENT_ORDER);
  }

  private saveAllToLocalStorage() {
    this.storageService.set(STORAGE_KEY_ORDERS, this.orders);
    this.storageService.set(STORAGE_KEY_CURRENT_ORDER, this.currentOrder);
    console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
    console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
  }

  private removeAllOfLocalStorage() {
    console.log("Deleting local storage ...");
    console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
    console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
    this.storageService.remove(STORAGE_KEY_ORDERS);
    this.storageService.remove(STORAGE_KEY_CURRENT_ORDER);
    this.orders = new Array<Order>();
    this.currentOrder = null;
    console.log(this.storageService.get(STORAGE_KEY_ORDERS) || 'Local storage orders is empty');
    console.log(this.storageService.get(STORAGE_KEY_CURRENT_ORDER) || 'Local storage current order is empty');
  }
}
