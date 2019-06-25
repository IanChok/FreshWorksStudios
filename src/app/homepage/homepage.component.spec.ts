import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

import { HomepageComponent } from './homepage.component';
import { CounterComponent } from '../counter/counter.component';


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  let componentChild: CounterComponent;
  let fixtureChild: ComponentFixture<CounterComponent>;

  const fb: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent, CounterComponent ],
      providers: [
        // reference the new instance of formBuilder from above
        { provide: FormBuilder, useValue: fb }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    fixtureChild = TestBed.createComponent(CounterComponent);
    componentChild = fixtureChild.componentInstance;

    componentChild.reactiveForm = fb.group({
      time: new FormControl(new Date().toLocaleString('en-US', this.options)),
      food: new FormControl(''),
      location: new FormControl(''),
      numberOfDucks: new FormControl(''),
      foodType: new FormControl(''),
      foodQuantity: new FormControl(''),
    });

    componentChild.ngOnInit();
    fixtureChild.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
