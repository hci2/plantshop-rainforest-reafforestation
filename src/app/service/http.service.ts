import {Inject, Injectable} from '@angular/core';
import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';
import {UuidGeneratorService} from "./uuid-generator.service";
import {Organisation} from "../model/organisation";

const urlCountries = 'assets/countries.json';
const urlOrganisations = 'assets/organisations.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries() {
    return this.httpClient.get<Country[]>(urlCountries);
  }

  getOrganisations(){
    return this.httpClient.get<Organisation[]>(urlOrganisations);
  }

}
