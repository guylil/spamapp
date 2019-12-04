import { Injectable } from '@angular/core';
import {AdDispatcher} from 'ubimo-fed-home-assigment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {


  constructor(
    public adDispatcher: AdDispatcher
  ) { }

  getAds() {
    this.adDispatcher.adEvents$.subscribe(
      x => console.log('next: ', x),
      err => console.log('error: ', err),
      () => console.log('finished')
    );
  }
}
