import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertifComponent } from './components/certif/certif.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuestroservComponent } from './components/nuestroserv/nuestroserv.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: '', redirectTo:'certif', pathMatch:'full'},
  
  {path: 'certif', component: CertifComponent},
  {path: 'nuestroser', component: NuestroservComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'info', component: InfoComponent},
  {path: 'productos', component: ProductosComponent},
 
  {path: '**', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
