import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../assets/BL_logo_square_jpg.jpg';

  ngOnInit() {
    console.log('Hello from BridgeLabz');
  }
}
