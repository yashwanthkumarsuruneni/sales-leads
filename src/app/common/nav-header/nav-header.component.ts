import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { SalesLeadService } from "../../leads-service";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
@Component({
  selector: "nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.scss"]
})
export class NavHeaderComponent implements OnInit {
  pages: Observable<string[]>;
  activePage: number;

  constructor(private salesLead: SalesLeadService, private router: Router) {}
  ngOnInit() {
    this.pages = this.salesLead.trackPage.pipe(
      map(page =>
        page
          .toString()
          .split("/")
          .filter(page => page.length !== 0)
      )
    );
  }

  goTo(event) {
    console.log(event);
    this.router.navigate([event]);
  }
}
