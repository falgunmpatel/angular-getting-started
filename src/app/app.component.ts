import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com';
  username: string = '';

  ngOnInit() {
    console.log('Hello from BridgeLabz');
  }

  onClick($event: any) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }
}