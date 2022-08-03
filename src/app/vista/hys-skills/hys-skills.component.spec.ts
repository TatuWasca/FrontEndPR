import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HySSkillsComponent } from './hys-skills.component';

describe('HySSkillsComponent', () => {
  let component: HySSkillsComponent;
  let fixture: ComponentFixture<HySSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HySSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HySSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
