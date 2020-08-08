import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { ProductService } from './product.service';
import { NewsComponent } from './news/news.component';
import { GiasuService } from './admin/giasu.service';
import { GiasuManagerComponent } from './admin/giasu-manager/giasu-manager.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GiaSuListComponent } from './gia-su-list/gia-su-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, LoginComponent, AdminComponent, SignUpComponent, DashboardComponent, ContactComponent, ServiceComponent, ProductManagerComponent, NewsComponent, GiasuManagerComponent, ProductEditComponent, HeaderComponent, FooterComponent, GiaSuListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, GiasuService]
})
export class AppModule { }
