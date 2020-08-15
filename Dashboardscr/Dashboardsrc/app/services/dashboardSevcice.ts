import {Password} from '../models/change-password';
import{HttpClient,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ChangePasswordService{
    httpClient: any;
    constructor(private http:HttpClient)
    {

    }
    public getPass(id:string)
    {
        return this.http.get("https://localhost:44345/api/UserDetails?id="+id);
    }
    public putPass(id:number,pass:Password)
    {
        return this.http.put("https://localhost:44345/api/UserDetails/"+id,pass);
    }

}