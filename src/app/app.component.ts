import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ad, AdsService} from './ads.service';
import {AdHostDirective} from './ad-host.directive';
import {AdWindowComponent} from './ad-window/ad-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Spam';
  @ViewChild (AdHostDirective, {static: true}) adHost: AdHostDirective;
  constructor(private adsService: AdsService, private componentFactoryResolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
    this.adsService.subscribeAds();
    this.adsService.currentAd.subscribe(
      ad => this.popAnAd(ad)
    );
  }
  ngOnDestroy() {
    this.adsService.unsubscribeAds();
  }
  popAnAd(data) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AdWindowComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdWindowComponent).data = data;
    // @ts-ignore
    setTimeout(() => { viewContainerRef.remove(viewContainerRef.indexOf(componentRef)); } , 5000);
  }
}

