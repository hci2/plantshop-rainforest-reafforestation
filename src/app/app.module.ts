import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from "ngx-toastr";
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import {AppComponent} from './app.component';
import {OverviewComponent} from './overview/overview.component';
import {MapComponent} from './donation/map/map.component';
import {ListComponent} from './donation/list/list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {OrganisationComponent} from "./donation/organisation/organisation.component";
import { ImprintComponent } from './imprint/imprint.component';
import {HeaderComponent} from "./header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes =
  [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'donation/map', component: MapComponent},
    {path: 'donation/list', component: ListComponent},
    {path: 'donation/organisation', component: OrganisationComponent},
      // children: [
      //   {path: 'map', component: MapComponent},
      //   {path: 'list', component: ListComponent},
      //   {path: 'organisation', component: FundComponent},
      // ]
    {path: 'imprint', component: ImprintComponent},
    {path: '**', component: PageNotFoundComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MapComponent,
    OrganisationComponent,
    ListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPageScrollCoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0HGHUrjdLwZdcm0zhFggq6HbkmBPWgXQ'
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
