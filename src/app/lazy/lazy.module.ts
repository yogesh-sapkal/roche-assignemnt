import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy-component/lazy-component.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule, // Import lazy routing module
  ],
})
export class LazyModule {}
