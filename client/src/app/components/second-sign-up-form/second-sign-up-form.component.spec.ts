import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSignUpFormComponent } from './second-sign-up-form.component';

describe('SecondSignUpFormComponent', () => {
  let component: SecondSignUpFormComponent;
  let fixture: ComponentFixture<SecondSignUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSignUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
