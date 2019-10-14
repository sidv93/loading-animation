import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public loading = false;
  constructor() { }

  public startLoading() {
    this.loading = true;
  }

  public stopLoading() {
    this.loading = false;
  }
}
