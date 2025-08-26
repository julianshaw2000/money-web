/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonateactionComponent } from './donateaction.component';

describe('DonateactionComponent', () => {
  let component: DonateactionComponent;
  let fixture: ComponentFixture<DonateactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
