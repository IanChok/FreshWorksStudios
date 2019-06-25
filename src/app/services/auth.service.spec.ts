import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { defer } from 'rxjs/internal/observable/defer';
import { Observable, of } from 'rxjs';


const todosServiceStub = {
  get() {
    const todos = [{id: 1}];
    return of( todos );
  }
};

describe('AuthService', () => {


  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthService,
                {provide: AngularFireAuth, useValue: todosServiceStub},
              {provide: Router, useValue: {}}],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
