import { Component, OnInit } from '@angular/core';
import {AdsService} from '../ads.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ads: any[];
  time: Observable<any>;

  constructor( private adsService: AdsService) { }

  ngOnInit() {
    this.ads = this.adsService.ads;
    this.time = new Observable<string>(observer => {setInterval (() => observer.next(new Date().toString()), 1000); });
  }

}
