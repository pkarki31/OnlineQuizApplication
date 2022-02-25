import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizerulesComponent } from './quizerules.component';

describe('QuizerulesComponent', () => {
  let component: QuizerulesComponent;
  let fixture: ComponentFixture<QuizerulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizerulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
