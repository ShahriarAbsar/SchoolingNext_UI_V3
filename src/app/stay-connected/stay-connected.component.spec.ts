import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayConnectedComponent } from './stay-connected.component';

describe('StayConnectedComponent', () => {
  let component: StayConnectedComponent;
  let fixture: ComponentFixture<StayConnectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StayConnectedComponent]
    });
    fixture = TestBed.createComponent(StayConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
