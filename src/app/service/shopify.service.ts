import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../model/country";

// const dotenv = require('dotenv').config();
// const express = require('express');
// const app = express();
// const crypto = require('crypto');
// const cookie = require('cookie');
// const nonce = require('nonce')();
// const querystring = require('querystring');
// const request = require('request-promise');

const SHOPIFY_API_KEY="TODO:INSERT_SHOPIFY_API_KEY";
const SHOPIFY_API_SECRET="TODO:INSERT_SHOPIFY_API_SECRET";
const scopes = 'read_products';
const forwardingAddress = "https://73f7d6a9.ngrok.io"; // Replace this with your HTTP

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private httpClient: HttpClient) {
  }

  shopify() {
    return this.httpClient.get("shopify")
  }

  shopifyCallback() {
    return this.httpClient.get("shopify/callback")
  }
}
