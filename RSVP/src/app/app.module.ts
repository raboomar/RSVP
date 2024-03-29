import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GuestFormComponent } from './components/guest-form/guest-form.component';
import{MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatRadioModule} from '@angular/material/radio'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { NetworkInterceptor } from './network/network.interceptor';
import { ViewGuestComponent } from './components/view-guest/view-guest.component';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from  '@angular/material/paginator'
@NgModule({
  declarations: [
    AppComponent,
    GuestFormComponent,
    ViewGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatRadioModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
