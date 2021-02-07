import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { NavComponent } from './container/nav/nav.component';
import { HomeComponent } from './container/home/home.component';
import { IntelComponent } from './components/customize/intel/intel.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PcComponentsComponent } from './components/pc-components/pc-components.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SignupComponent } from './components/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { AddressComponent } from './components/address/address.component';
import { SigninComponent } from './components/signin/signin.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    IntelComponent,
    ProductListComponent,
    PcComponentsComponent,
    CartComponent,
    SignupComponent,
    AddressComponent,
    SigninComponent,
    AboutusComponent,
    ContactusComponent,
    UserComponent,
    UserProfileComponent

  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,LayoutModule, MatToolbarModule,
    MatButtonModule,MatSidenavModule,MatIconModule, MatListModule, MatGridListModule,MatCardModule,
    MatMenuModule,NgMatSearchBarModule, HttpClientModule, NgxSpinnerModule, MatTableModule,FormsModule,
    ReactiveFormsModule,MatBadgeModule, MatInputModule,MatSnackBarModule, MatSelectModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
