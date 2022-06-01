import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapositivaHeaderComponent } from './diapositiva-header.component';

describe('DiapositivaHeaderComponent', () => {
  let component: DiapositivaHeaderComponent;
  let fixture: ComponentFixture<DiapositivaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiapositivaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapositivaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
