import { Injectable } from '@angular/core';
import {kesarija4} from './kesarija4';

@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {

  loadMyData() : kesarija4 {
    const MYINFO: kesarija4 =
    {sid: 991431408, sname: "Jaspreet Singh Kesari", slogin: "kesarij", scampus: "Davis", atitle: "Assignment4"}

    return MYINFO;
  }
  constructor() { }
}
