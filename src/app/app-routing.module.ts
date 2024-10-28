import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/lazy', pathMatch: 'full' },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Correctly use forRoot
  exports: [RouterModule],
})
export class AppRoutingModule {}
