
import { Component, OnInit, Input } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() brkList: Animals;
  @Input() lnchList: Animals;
  @Input() dnrList: Animals;

  constructor() { }

  ngOnInit() {
  }

}
