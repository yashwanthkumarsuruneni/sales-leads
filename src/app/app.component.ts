import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.route.data
    //   .subscribe(
    //     (data: Data) => {
    //       data['server'];
    //     }
    //   );

    this.route.url.subscribe(x => console.log(x));
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

  ngOnChanges() {
    this.route.url.subscribe(x => console.log(x));
  }
}
