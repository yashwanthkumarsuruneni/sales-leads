import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { Observable, of } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class SalesLeadService {
  public trackPage = new Subject();
  private salesLeadUrl = "https://interview.dxs-platform.com/api/leads"; // URL to web api

  constructor(private http: HttpClient) {}

  addSalesLead(salesLead): Observable<any> {
    return this.http.post(this.salesLeadUrl, salesLead, httpOptions).pipe(
      tap(_ => this.log("Added salesLeads")),
      catchError(this.handleError("Sales Lead Couldn't be added", []))
    );
  }

  getSalesLeads(): Observable<any> {
    return this.http.get(this.salesLeadUrl).pipe(
      tap(_ => this.log("fetched sales leads")),
      catchError(this.handleError("get sales leads", []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SalesLeadService message with the MessageService */
  private log(message: string) {
    console.log(`Sales Lead Service: ${message}`);
  }
}
