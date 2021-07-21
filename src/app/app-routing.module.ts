import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdComponent } from './CadastroProd/CadastroProd.component';
import { ConsultaProdComponent } from './ConsultaProd/ConsultaProd.component';

const routes: Routes = [
  {path:'cadastro',component:CadastroProdComponent},
  {path:'consulta',component:ConsultaProdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
