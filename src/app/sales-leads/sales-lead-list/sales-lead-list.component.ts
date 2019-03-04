import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SalesLeadService } from "../../leads-service";

@Component({
  selector: "sales-lead-list",
  templateUrl: "./sales-lead-list.component.html",
  styleUrls: ["./sales-lead-list.component.scss"]
})
export class SalesLeadListComponent implements OnInit {
  count: number;
  salesLeads: Array<Object>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salesLead: SalesLeadService
  ) {}

  ngOnInit() {
    this.getLeads();
    this.salesLead.trackPage.next(this.router.url);
  }

  getLeads() {
    this.salesLead.getSalesLeads().subscribe(({ count, payload }) => {
      this.count = count;
      this.salesLeads = payload;
    });
    console.log(this.salesLeads);
  }
  addSalesLead() {
    this.router.navigate(["addsaleslead"], { relativeTo: this.route });
  }
}
