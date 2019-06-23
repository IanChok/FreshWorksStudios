import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrentService } from '../services/current.service';

import { FormControl, FormGroup } from '@angular/forms';

// tslint:disable-next-line:prefer-const
let CurrentServiceStub: Partial<CurrentService>;


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
