import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatoryEventComponent } from './participatory-event.component';

describe('ParticipatoryEventComponent', () => {
  let component: ParticipatoryEventComponent;
  let fixture: ComponentFixture<ParticipatoryEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipatoryEventComponent]
    });
    fixture = TestBed.createComponent(ParticipatoryEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
