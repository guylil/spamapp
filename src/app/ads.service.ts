import { Injectable } from '@angular/core';
import { AdDispatcher } from 'ubimo-fed-home-assigment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  currentAd;
  ads = [];
  adsSub;
  constructor(
    public adDispatcher: AdDispatcher
  ) {
    let a = setInterval(() => console.log('currAd: ', JSON.stringify(this.currentAd)), 1000);
    let b = setTimeout(() => {this.unsubscribeAds(); clearInterval(a)}, 28000);
  }
  subscribeAds() {
    this.adsSub = this.adDispatcher.adEvents$.subscribe(
      x => {
        this.currentAd = {...x, date: new Date()};
        this.ads.push(this.currentAd);
        // this.showAd(this.currentAd);
        // console.log('next: ', x);
      },
      err => console.log('error: ', err),
      () => console.log('finished')
    );
  }
  showAd(ad) {console.log(JSON.stringify(ad));
  }
  unsubscribeAds() {
    this.adsSub.unsubscribe();
  }
  getAds1() {
    // console.log(this.adsSub);
    // return this.adDispatcher.adEvents$.pipe(x => x.type);
  }
}
