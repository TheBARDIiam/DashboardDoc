import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: "hospital-root",
  standalone: true,
  imports: [RouterOutlet,
 
  ],
  
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  
}
