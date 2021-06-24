import { Component, OnInit } from '@angular/core';
import {RestService} from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'temp';
  data: any;

  constructor(private ser:RestService){

  }
ngOnInit(){
this.data=this.ser.getData().subscribe((data)=>{
  console.log(data)
});

this.ser.getData().subscribe((data)=>{
  console.log(data)
}, err=>console.log(err));

this.ser.getData1().subscribe((data)=>{
  console.log("new",data)
}, (err)=>{
  console.log(err)
});

}

}
