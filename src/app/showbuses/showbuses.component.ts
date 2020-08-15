import { Component, OnInit, Injectable } from '@angular/core';
import { BusService } from '../service/busService';
import { Bus } from '../models/bus';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {HttpClient} from "@angular/common/http"


@Component({
  selector: 'app-showbuses',
  templateUrl: './showbuses.component.html',
  styleUrls: ['./showbuses.component.css']
})
export class ShowbusesComponent implements OnInit {
  buses;
  bus:Bus;
  fromlocation;
  tolocation;
  type$;
  date;
  constructor(private busService:BusService) { 
    
    this.bus=new Bus();
  }
  model:any={};
    emp:any;
    emp1:any;
  
  ngOnInit(): void {
    this.type$=this.droplist();
    //this.fetchBuses(this.fromlocation,this.tolocation,this.date);
  }
  populate(TripID){
    this.tolocation=this.busService.tolocationfrom(TripID);
    //this.fetchBuses(this.fromlocation,this.tolocation,this.date);
  }
  droplist(){
    return this.busService.getBuses();
  }
  fetchBuses(){
    this.busService.getBuses().subscribe((data)=>{
      this.emp=data;
      //console.log(this.emp);
    })
  }
   searchdata(){
     this.busService.searchTable(this.model).subscribe((res)=>{
      this.emp=res;
     console.log(res);
     
     })
  }

}
