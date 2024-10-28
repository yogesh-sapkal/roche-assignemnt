import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { CommunicationService } from './communication.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ensure this is imported correctly
    FormsModule,      // Ensure this is imported correctly
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
