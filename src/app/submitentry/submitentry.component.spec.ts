import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitentryComponent } from './submitentry.component';

describe('SubmitentryComponent', () => {
  let component: SubmitentryComponent;
  let fixture: ComponentFixture<SubmitentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
