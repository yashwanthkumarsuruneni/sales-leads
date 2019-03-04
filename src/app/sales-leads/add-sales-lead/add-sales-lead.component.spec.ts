import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesLeadComponent } from './add-sales-lead.component';

describe('AddSalesLeadComponent', () => {
  let component: AddSalesLeadComponent;
  let fixture: ComponentFixture<AddSalesLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
