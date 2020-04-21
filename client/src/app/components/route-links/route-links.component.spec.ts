import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLinksComponent } from './route-links.component';

describe('RouteLinksComponent', () => {
  let component: RouteLinksComponent;
  let fixture: ComponentFixture<RouteLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
