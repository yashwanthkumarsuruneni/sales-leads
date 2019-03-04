import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadListComponent } from './sales-lead-list.component';

describe('SalesLeadListComponent', () => {
  let component: SalesLeadListComponent;
  let fixture: ComponentFixture<SalesLeadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLeadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
