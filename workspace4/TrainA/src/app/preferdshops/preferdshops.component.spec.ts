import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferdshopsComponent } from './preferdshops.component';

describe('PreferdshopsComponent', () => {
  let component: PreferdshopsComponent;
  let fixture: ComponentFixture<PreferdshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferdshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferdshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
