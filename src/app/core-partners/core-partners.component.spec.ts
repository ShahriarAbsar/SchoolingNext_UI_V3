import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePartnersComponent } from './core-partners.component';

describe('CorePartnersComponent', () => {
  let component: CorePartnersComponent;
  let fixture: ComponentFixture<CorePartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorePartnersComponent]
    });
    fixture = TestBed.createComponent(CorePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
