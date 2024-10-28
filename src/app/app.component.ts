import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  
  template: `
    <input [(ngModel)]="newMessage" placeholder="Enter new message" />
    <button (click)="sendMessage()">Send Message</button>
    <button (click)="navigate()">Go to Lazy Module</button>
    <router-outlet></router-outlet> 
  `,
})
export class AppComponent {
  newMessage: string = '';

  constructor(private communicationService: CommunicationService, private router: Router) {}

  sendMessage() {
    this.communicationService.changeMessage(this.newMessage);
  }

  navigate() {
    this.router.navigate(['/lazy', { param: 'someValue' }]);
  }
}
