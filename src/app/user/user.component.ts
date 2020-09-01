import { Component, OnInit ,Output ,EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Userinfo} from '../userinfo';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})




export class UserComponent implements OnInit {

User : Observable <Userinfo[]>;  
showdark:boolean=false;
dateTime  = new Date();


toggler(){
  this.showdark=!this.showdark;
}


  constructor() { }


  ngOnInit() {





}

}