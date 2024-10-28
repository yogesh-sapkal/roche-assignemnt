import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy-component/lazy-component.component';

const routes: Routes = [
  { path: '', component: LazyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {
  constructor() {
    // Dynamically add additional routes
    const additionalRoute = { path: 'extra', component: LazyComponent };
    routes.push(additionalRoute);
    RouterModule.forChild(routes);
  }
}
