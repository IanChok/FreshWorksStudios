import { TestBed } from '@angular/core/testing';
import { CurrentService } from './current.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


describe('CurrentService', () => {

  const AngularFireStoreStub = {};

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CurrentService,
                {provide: AngularFirestore, useValue: AngularFireStoreStub},
                ]
  }));

  it('should be created', () => {
    const service: CurrentService = TestBed.get(CurrentService);
    expect(service).toBeTruthy();
  });
});
