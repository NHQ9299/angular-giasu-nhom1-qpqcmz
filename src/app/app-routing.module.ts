import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { NewsComponent } from './news/news.component';
import { GiasuManagerComponent } from './admin/giasu-manager/giasu-manager.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { GiaSuListComponent } from './gia-su-list/gia-su-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'news', component: NewsComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'giasu-list', component: GiaSuListComponent},
  { path: 'admin', component: AdminComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'maganer-taikhoan', component: ProductManagerComponent},
        { path: 'maganer-giasu', component: GiasuManagerComponent},
        { path: "edit/:id", component: ProductEditComponent},
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
