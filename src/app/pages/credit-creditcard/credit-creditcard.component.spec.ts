import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCreditcardComponent } from './credit-creditcard.component';

describe('CreditCreditcardComponent', () => {
  let component: CreditCreditcardComponent;
  let fixture: ComponentFixture<CreditCreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCreditcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
