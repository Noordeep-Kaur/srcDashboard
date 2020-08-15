import { Component, OnInit } from '@angular/core';
import {PickupService} from '../services/pickups.Service';
import {Pickups} from '../models/pickups';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickup:Pickups;
  pickups;
  id:string;
  toLocation:string;
  fromDate:string;
 // index:number;

  constructor(private pickService:PickupService) 
  {
   // this.index=0;
    this.id="12";
    this.toLocation="Delhi";
    this.fromDate="2020-08-26";
    this.pickup=new Pickups();
    this.pickService.getPickups(this.id,this.toLocation,this.fromDate).subscribe((data)=>{
      //console.log(data);
      this.pickups=data;
    })
  //  this.pickup=this.pickups[this.index];
   }

  ngOnInit(): void {
  }

}
