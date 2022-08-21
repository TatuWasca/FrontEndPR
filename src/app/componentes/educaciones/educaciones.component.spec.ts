import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionesComponent } from './educaciones.component';

describe('EducacionComponent', () => {
  let component: EducacionesComponent;
  let fixture: ComponentFixture<EducacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
