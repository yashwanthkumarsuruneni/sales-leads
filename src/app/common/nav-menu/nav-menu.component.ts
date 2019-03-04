import { Component, OnInit } from "@angular/core";
import { Account } from "../../account";
@Component({
  selector: "nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"]
})
export class NavMenuComponent implements OnInit {
  accounts: Account[] = [
    {
      name: "Sales Lead",
      description: "Review and create new leads",
      path: "salesleads"
    },
    {
      name: "Contacts",
      description: "View all contacts",
      path: "contacts"
    },
    {
      name: "Calender",
      description: "Sales lead calender and schedule",
      path: "calender"
    },
    {
      name: "Reports",
      description: "Review and export custom reports",
      path: "reports"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
