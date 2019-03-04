import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";

@Component({
  selector: "sales-leads",
  templateUrl: "./sales-leads.component.html",
  styleUrls: ["./sales-leads.component.scss"]
})
export class SalesLeadsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }
}
