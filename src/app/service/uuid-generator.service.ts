import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import {Order} from "../model/order";

const minUuid = 1;
const maxAddRandomUuid = 5;

@Injectable({
  providedIn: 'root'
})
export class UuidGeneratorService {
  randomAmount = this.generateRandomAmount();

  constructor() { }

  getUuids(amount: number): Array<Order> {
    const prefix = 'order-';
    const uuids: Array<Order> = [];
    for (let i = 0; i < amount; i++) {
      uuids.push(new Order(prefix + uuid()));
    }
    return uuids;
  }

  getRandomAmount(){
    return this.randomAmount;
  }

  private generateRandomAmount() {
    return minUuid + (Math.floor(Math.random() * Math.floor(maxAddRandomUuid)));
  }
}




