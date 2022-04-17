import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicronutrientsComponent } from './micronutrients.component';

describe('MicronutrientsComponent', () => {
  let component: MicronutrientsComponent;
  let fixture: ComponentFixture<MicronutrientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicronutrientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicronutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
