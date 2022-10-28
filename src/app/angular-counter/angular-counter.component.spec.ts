import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCounterComponent } from './angular-counter.component';

describe('AngularCounterComponent', () => {
  let component: AngularCounterComponent;
  let fixture: ComponentFixture<AngularCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
