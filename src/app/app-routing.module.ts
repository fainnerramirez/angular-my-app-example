import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { UsuarioComponent } from './Component/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'user',
    component: UsuarioComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
