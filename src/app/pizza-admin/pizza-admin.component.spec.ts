import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAdminComponent } from './pizza-admin.component';

describe('PizzaAdminComponent', () => {
  let component: PizzaAdminComponent;
  let fixture: ComponentFixture<PizzaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
