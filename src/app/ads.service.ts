import { Injectable } from '@angular/core';
import {AdDispatcher, IAdEvent, ICreative} from 'ubimo-fed-home-assigment';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  currentAd: Observable<IAdEvent>;
  ads: Ad[] = [];
  adsSub;
  constructor(
    public adDispatcher: AdDispatcher
  ) {
    // let a = setInterval(() => console.log('currAd: ', JSON.stringify(this.currentAd)), 1000);
    // let b = setTimeout(() => {this.unsubscribeAds(); clearInterval(a)}, 28000);
  }
  subscribeAds() {
    this.adsSub = this.adDispatcher.adEvents$
      .pipe(ad => this.currentAd = ad)
      .subscribe(
      x => {
        this.ads.push({...x, date: new Date()});
      },
      err => console.log('error: ', err),
      () => console.log('finished')
    );
  }
  unsubscribeAds() {
    this.adsSub.unsubscribe();
  }
}

export interface Ad {
  date: Date;
  type: 'IMAGE' | 'VIDEO';
  coordinates: {
    x: number;
    y: number;
  };
  creative: ICreative;
}
