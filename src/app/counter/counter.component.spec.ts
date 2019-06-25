import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrentService } from '../services/current.service';

import { FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Button } from 'protractor';

// tslint:disable-next-line:prefer-const
let CurrentServiceStub: Partial<CurrentService>;


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        {provide: CurrentService, useValue: CurrentServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    fixture.detectChanges();
    expect(el.querySelector('h3').textContent).toContain('Feed the Ducks!');
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', () => {
    expect(component.reactiveForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.reactiveForm.controls['food'].setValue('bread');
    component.reactiveForm.controls['location'].setValue('Beacon Hill Park, Victoria, BC, Canada');
    component.reactiveForm.controls['numberOfDucks'].setValue('3');
    component.reactiveForm.controls['foodType'].setValue('Bread');
    component.reactiveForm.controls['foodQuantity'].setValue('6-10 g');
    expect(component.reactiveForm.valid).toBeTruthy();
  });

  it('submit should be disabled for invalid forms', () => {
    const button = de.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

});
