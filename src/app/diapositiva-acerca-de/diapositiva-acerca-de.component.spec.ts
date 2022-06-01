import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapositivaAcercaDeComponent } from './diapositiva-acerca-de.component';

describe('DiapositivaAcercaDeComponent', () => {
  let component: DiapositivaAcercaDeComponent;
  let fixture: ComponentFixture<DiapositivaAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiapositivaAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapositivaAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
