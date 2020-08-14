import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:"<h1>This is inLine html</h1><app-child>This is the child</app-child>", 
  styleUrls: ['./app.component.css']
  // styles: ['h1 {color:blue;}']
})
export class AppComponent {

  family: any[] = [
    {name:"Alice", isFemale: true },
    {name:"Betty", isFemale: true },
    {name:"Chris", isFemale: false },
    {name:"Doug", isFemale: false }
  ];
}
