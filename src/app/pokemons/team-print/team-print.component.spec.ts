import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPrintComponent } from './team-print.component';

describe('TeamPrintComponent', () => {
  let component: TeamPrintComponent;
  let fixture: ComponentFixture<TeamPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
