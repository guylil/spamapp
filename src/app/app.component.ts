import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdsService} from './ads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spam';

  constructor(private adsService: AdsService) {
  }

  ngOnInit() {
    this.adsService.subscribeAds();
  }
  ngOnDestroy() {
    this.adsService.unsubscribeAds();
  }
}
