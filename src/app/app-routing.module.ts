import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SalesLeadsComponent } from "./sales-leads/sales-leads.component";
import { AddSalesLeadComponent } from "./sales-leads/add-sales-lead/add-sales-lead.component";
import { SalesLeadListComponent } from "./sales-leads/sales-lead-list/sales-lead-list.component";

const routes: Routes = [
  {
    path: "salesleads",
    component: SalesLeadsComponent,
    children: [
      { path: "", component: SalesLeadListComponent },
      { path: "addsaleslead", component: AddSalesLeadComponent }
    ]
  },
  { path: "", redirectTo: "/salesleads", pathMatch: "full" },
  { path: "contacts", redirectTo: "/salesleads", pathMatch: "full" },
  { path: "calender", redirectTo: "/salesleads", pathMatch: "full" },
  { path: "reports", redirectTo: "/salesleads", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
