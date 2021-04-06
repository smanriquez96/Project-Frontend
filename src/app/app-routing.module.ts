import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LOGIN_URL } from '@constants/url.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN_URL,
    pathMatch: 'full'
  },
  {
    path: LOGIN_URL,
    loadChildren: './pages/login/login.module#LoginPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
