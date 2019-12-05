import {Component, ComponentFactoryResolver, OnDestroy, OnInit} from '@angular/core';
import {AdsService} from './ads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spam';

  constructor(private adsService: AdsService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.adsService.subscribeAds();
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.adsService.currentAd);
    // const viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();

  }
  ngOnDestroy() {
    this.adsService.unsubscribeAds();
  }
}
