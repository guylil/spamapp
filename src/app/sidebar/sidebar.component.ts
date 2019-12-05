import { Component, OnInit } from '@angular/core';
import {Ad, AdsService} from '../ads.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ads: Ad[];

  constructor( private adsService: AdsService) { }

  ngOnInit() {
    this.ads = this.adsService.ads;
  }

}
