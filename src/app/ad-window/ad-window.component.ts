import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../ads.service';

@Component({
  selector: 'app-ad-window',
  templateUrl: './ad-window.component.html',
  styleUrls: ['./ad-window.component.scss']
})
export class AdWindowComponent implements OnInit {
  @Input() ad: Ad;
  constructor() { }

  ngOnInit() {
  }

}
