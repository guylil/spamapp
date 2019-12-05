import {Component, Input, OnInit} from '@angular/core';
import {Ad, AdsService} from '../ads.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ads: Ad[];
  from: number = Date.now();
  to: number = Date.now();

  constructor( private adsService: AdsService) { }

  ngOnInit() {
    this.ads = this.adsService.ads;
  }
  filterByRange(from, to) {
    this.ads = [...this.adsService.ads];
    this.ads = this.ads.filter(ad => ad.date.getTime() > from && ad.date.getTime() < to);
  }
  reload() {
    this.ads = this.adsService.ads;
  }
}
