import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {AdsService} from '../ads.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  myObservable = of(0, 1, 2, 3, 4);
  myObserver = {
    next: x => console.log('Observer got a next value: ', x),
    error: err => console.log('Obs got error: ', err),
    complete:  () => console.log('observer got complete notification'),
  };
  constructor(
    private adsService: AdsService,
  ) {}

  ngOnInit() {
    console.log('map loaded');
    this.logEvent();
    // this.adDispatcher.registerToAdEvents()
    // console.log(this.myObservable);
  }

  logEvent() {
    this.adsService.getAds();

    // this.myObservable.subscribe(this.myObserver);
    // this.myObservable.subscribe(
    //   x => console.log('next value: ', x),
    //   error =>  console.log('got error: ', error),
    //   () => console.log('Observer got complete notification')
    // );
  }
}
