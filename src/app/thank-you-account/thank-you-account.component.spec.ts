import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouAccountComponent } from './thank-you-account.component';

describe('ThankYouAccountComponent', () => {
  let component: ThankYouAccountComponent;
  let fixture: ComponentFixture<ThankYouAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
