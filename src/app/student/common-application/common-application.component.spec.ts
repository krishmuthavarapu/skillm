import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonApplicationComponent } from './common-application.component';

describe('CommonApplicationComponent', () => {
  let component: CommonApplicationComponent;
  let fixture: ComponentFixture<CommonApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
