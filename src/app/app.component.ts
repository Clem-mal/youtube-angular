import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-angular';
  userInput = "";

  onReceiveNewSearch($event: string) {
    this.userInput = $event
 }
}
