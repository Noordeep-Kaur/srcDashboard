import{HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Pickups} from '../models/pickups';

@Injectable()
    export class PickupService
    {
        pickups:Pickups[];
        constructor(private http:HttpClient)
        {
            this.pickups=[];
        }

        public getPickups(id:string,toLocation:String,fromDate:string)
        {
            return this.http.get("http://localhost:51455/api/JourneyRoutes?id="+id+"&toLocation="+toLocation+"&fromDate="+fromDate);
        }
    }