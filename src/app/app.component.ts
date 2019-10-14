import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loading-animation';

  public constructor(private globalService: GlobalService) {}

  public ngOnInit() {
    this.globalService.loading = true;
    setTimeout(() => {
      this.globalService.loading = false;
    }, 4000);
  }
}
