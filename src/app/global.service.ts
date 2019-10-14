import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public loading = false;
  constructor() { }

  public toggleAnimation() {
    this.loading = !this.loading;
  }
}
