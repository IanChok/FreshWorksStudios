import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CurrentService } from './services/current.service';
import { environment } from 'src/environments/environment';
import { DataViewComponent } from './data-view/data-view.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

const rootRoute = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'data-view', component: DataViewComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DataViewComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(rootRoute)
  ],
  providers: [CurrentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
