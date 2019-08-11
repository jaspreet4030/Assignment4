import { Component, OnInit } from '@angular/core';
import { Kesarij } from "../kesarij";

@Component({

  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
  
})
export class FooterComponent implements OnInit {

  currStudent: Kesarij = {
    sid: 991491408, sname: "Jaspreet Singh Kesari",
    slogin: "kesarij", scampus: "Trafalgar", 
    atitle: "Assignment-4"
  }

  constructor() { }

  ngOnInit() {
  }

}
