import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularquestionComponent } from './angularquestion.component';

describe('AngularquestionComponent', () => {
  let component: AngularquestionComponent;
  let fixture: ComponentFixture<AngularquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
