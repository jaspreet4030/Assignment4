import { Component } from '@angular/core';
/* import Class and my Service */
import {kesarija4} from './kesarija4';
import {PersonaldataService} from './personaldata.service';

import {Animals} from './animals';
import Dogs from '../assets/data/dogs.json';
import Horses from '../assets/data/horses.json';
import Fishes from '../assets/data/fishes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kesarija4';

  myinfo: kesarija4;

  bList: Animals[] = Dogs.dogs;
  lList: Animals[] = Horses.horses;
  dList: Animals[] = Fishes.fishes;

  constructor(private pserve: PersonaldataService) {}

  
  loadMyPersonalData() : void {
    this.myinfo = this.pserve.loadMyData();
  }

  ngOnInit() { this.loadMyPersonalData(); }
}


