import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardListComponent } from './property-card-list.component';

describe('PropertyCardListComponent', () => {
  let component: PropertyCardListComponent;
  let fixture: ComponentFixture<PropertyCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
