import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SalesLeadsComponent } from "./sales-leads/sales-leads.component";
import { AddSalesLeadComponent } from "./sales-leads/add-sales-lead/add-sales-lead.component";
import { NavMenuComponent } from "./common/nav-menu/nav-menu.component";
import { NavHeaderComponent } from "./common/nav-header/nav-header.component";
import { GlobalHeaderComponent } from "./common/global-header/global-header.component";
import { SalesLeadListComponent } from "./sales-leads/sales-lead-list/sales-lead-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SalesLeadsComponent,
    AddSalesLeadComponent,
    NavMenuComponent,
    NavHeaderComponent,
    GlobalHeaderComponent,
    SalesLeadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
