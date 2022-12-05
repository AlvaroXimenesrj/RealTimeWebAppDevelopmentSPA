import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './_shared/home/home.component';
import { MainComponent } from './_shared/main/main.component';


const routes: Routes = [
  // {
  //   path: 'user', component: UserComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent }
  //   ]
  // },

  {
    path: 'dashboard', component: DashboardComponent,/* canActivate: [AuthGuard],*/
    children: [
      // { path: 'exportar', component: LeadExportarComponent, canActivate: [AuthGuard] },
      // { path: 'pesquisa', component: LeadPesquisaComponent, canActivate: [AuthGuard] },
      // { path: 'filtros', component: ComercialFiltrosComponent, canActivate: [AuthGuard] },
    ]
  },
  // {
  //   path: 'login', component: LoginComponent,/* canActivate: [AuthGuard],*/
  //   children: [
  //     // { path: 'exportar', component: LeadExportarComponent, canActivate: [AuthGuard] },
  //     // { path: 'pesquisa', component: LeadPesquisaComponent, canActivate: [AuthGuard] },
  //     // { path: 'filtros', component: ComercialFiltrosComponent, canActivate: [AuthGuard] },
  //   ]
  // },
  {
    path: 'main', component: MainComponent, /*canActivate: [AuthGuard],*/
    children: [
      { path: '', component: HomeComponent/*, canActivate: [AuthGuard]*/ },
      { path: 'login', component: LoginComponent/*, canActivate: [AuthGuard]*/ }
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
