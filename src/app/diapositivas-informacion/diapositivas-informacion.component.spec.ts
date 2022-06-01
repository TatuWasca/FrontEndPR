import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapositivasInformacionComponent } from './diapositivas-informacion.component';

describe('DiapositivasInformacionComponent', () => {
  let component: DiapositivasInformacionComponent;
  let fixture: ComponentFixture<DiapositivasInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiapositivasInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapositivasInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
