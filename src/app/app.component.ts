import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TrabajoIntegrador';

  loader:boolean = true;
  ngOnInit(): void {
    setTimeout(()=>{                           
      this.loader = false;
    }, 2000);
  }
}
  