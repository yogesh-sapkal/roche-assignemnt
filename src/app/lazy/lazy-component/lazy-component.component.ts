import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-component',
  template: `<h1>{{ message }}</h1>`,
})
export class LazyComponent implements OnInit {
  message: string;

  constructor(private communicationService: CommunicationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.communicationService.currentMessage.subscribe(
      (message) => (this.message = message)
    );

    this.route.params.subscribe(params => {
      this.message += ` | Passed Param: ${params['param']}`;
    });
  }
}
