import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // tslint:disable-next-line:prefer-const
  let authServiceStub: Partial<AuthService>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{provide: AuthService, useValue: authServiceStub}]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid', () => {
    expect(component.loginForm.valid).toBeTruthy();
  });
});
