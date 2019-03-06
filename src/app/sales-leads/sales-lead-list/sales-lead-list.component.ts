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
  default = 5;
  showMore = true;
  salesLeads: Array<any>;
  sales: Array<any>;
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
      this.sales = this.salesLeads.slice(0, this.default);
    });
  }
  addSalesLead() {
    this.router.navigate(["addsaleslead"], { relativeTo: this.route });
  }
  loadMore(e) {
    if (e === "none") {
      this.default = 5;
      this.sales = this.salesLeads.slice(0, this.default);
      this.showMore = true;
    } else if (this.salesLeads.length - this.default > 5) {
      this.sales = this.salesLeads.slice(0, this.default + e);
      this.default += e;
    } else {
      this.sales = this.salesLeads.slice(0, this.default + e);
      this.default = this.default + (this.salesLeads.length - this.default);
      this.showMore = false;
    }
  }
}
