import { Kesarij } from "../kesarija4";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: Kesarij = {
    sid: 991491408, sname: "Jaspreet Singh Kesari",slogin: "kesarij",
   scampus: "Trafalgar",atitle: "Assignment-4"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
