/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PingsListComponent } from './pings-list.component';

describe('PingsListComponent', () => {
  let component: PingsListComponent;
  let fixture: ComponentFixture<PingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
