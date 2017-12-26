import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByshopsComponent } from './near-byshops.component';

describe('NearByshopsComponent', () => {
  let component: NearByshopsComponent;
  let fixture: ComponentFixture<NearByshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearByshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
