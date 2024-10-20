import { Component } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  constructor(private route : Router){ 
  }

  public navigate(link:string){
    this.route.navigate([link])
  }
}
