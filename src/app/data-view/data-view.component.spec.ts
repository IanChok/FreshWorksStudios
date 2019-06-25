import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewComponent } from './data-view.component';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CurrentService } from '../services/current.service';

describe('DataViewComponent', () => {
  let component: DataViewComponent;
  let fixture: ComponentFixture<DataViewComponent>;
  const AngularFireStoreStub = {};
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataViewComponent ],
      providers: [CurrentService,
        {provide: AngularFirestore, useValue: AngularFireStoreStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an unordered list of data', () => {
    setTimeout(() => {
       const li = de.query(By.css('li')).nativeElement;
    expect(li).toBeTruthy();
    }, 100);
  });
});
