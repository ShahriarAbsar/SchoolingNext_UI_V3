import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationtestsComponent } from './animationtests.component';

describe('AnimationtestsComponent', () => {
  let component: AnimationtestsComponent;
  let fixture: ComponentFixture<AnimationtestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationtestsComponent]
    });
    fixture = TestBed.createComponent(AnimationtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
