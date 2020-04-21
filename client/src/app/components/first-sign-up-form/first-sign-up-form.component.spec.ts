import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSignUpFormComponent } from './first-sign-up-form.component';

describe('FirstSignUpFormComponent', () => {
  let component: FirstSignUpFormComponent;
  let fixture: ComponentFixture<FirstSignUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSignUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
