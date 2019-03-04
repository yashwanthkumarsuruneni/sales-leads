import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SalesLeadService } from "../../leads-service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "add-sales-lead",
  templateUrl: "./add-sales-lead.component.html",
  styleUrls: ["./add-sales-lead.component.scss"]
})
export class AddSalesLeadComponent implements OnInit {
  salesLeadForm: FormGroup;

  constructor(
    private saleslead: SalesLeadService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.saleslead.trackPage.next(this.router.url);
    this.salesLeadForm = new FormGroup({
      lead: new FormControl(null, Validators.required),
      rep: new FormControl(null, Validators.required),
      client: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.saleslead
      .addSalesLead(this.salesLeadForm.value)
      .subscribe(console.log);
    this.salesLeadForm.reset();
  }
  salesLeadList() {
    this.router.navigate(["salesleads"]);
  }
}
