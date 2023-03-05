import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CertifComponent } from './certif/certif.component';
import { NuestroservComponent } from './nuestroserv/nuestroserv.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CertifComponent,
    NuestroservComponent,
    FooterComponent,
    InfoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
exports: [
NavbarComponent,
CertifComponent,
NuestroservComponent,
FooterComponent,
InfoComponent,
ProductosComponent
]

})
export class ComponentsModule { }
