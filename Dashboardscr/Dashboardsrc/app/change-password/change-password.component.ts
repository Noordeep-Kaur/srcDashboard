import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators, FormControlName,FormBuilder} from '@angular/forms';
import { Password} from '../models/change-password';
import { ChangePasswordService} from '../services/dashboardSevcice';
//import { OldPwdValidators} from './pwd.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  pass:Password;
  myForm:FormGroup;
  res:boolean;
  result;
  constructor(private routes:Router,private passService:ChangePasswordService) { 
    this.res=false;
    this.pass=new Password();
    this.myForm=new FormGroup({
      userid:new FormControl(null,[Validators.required]),
      currentPass:new FormControl(null,[Validators.required]),
      newPass:new FormControl(null,[Validators.required]),
      rePass:new FormControl(null,[Validators.required])
    });
  }
  

  public get userid()
  {
      return this.myForm.get('userid');
  }

  public get currentPass()
  {
      return this.myForm.get('currentPass');
  }    
  public get newPass()
  {
      return this.myForm.get('newPass');
  }      
  public get rePass()
  {
      return this.myForm.get('rePass');
  }   
  // check(id:number)
  // {
  //   if(this.changePasswordForm.valid)
  //   {
  //     if(this.rePass.value==this.newPass.value)
  //     {
  //       this.pass.newPassword=this.newPass.value;
  //       this.pass.rePassword=this.rePass.value;
  //       this.passService.putPasses(id,this.pass).subscribe((data)=>{
  //         this.result=data;
  //       })
  //       this.res=true;
  //     }
  //   }
  // }
  changePassword(id:number)
  {
    {
        this.passService.putPass(id,this.pass).subscribe((data)=>{
          console.log(data)
       // this.result=data;
      })
    }
  }
  // changePassword(id:number) 
  // {
  //   this.passService.putPass(id,this.pass)
  //     .subscribe(data => console.log(data));
  // }

  cancel(){
    this.routes.navigate(["/bookings"]);
  }

  ngOnInit(): void {
  }

}
  // form1: FormGroup; 
  
  // constructor(fb: FormBuilder, private routes:Router){
  //   this.form1 = fb.group({
  //     'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
  //     'newPwd': ['',Validators.required],
  //     'confirmPwd': ['',Validators.required]
  //   }, {
  //     validator: OldPwdValidators.matchPwds
  //   });
  // }

  // get oldPwd(){
  //   return this.form1.get('oldPwd');
  // }

  //  get newPwd(){
  //   return this.form1.get('newPwd');
  // }

  //  get confirmPwd(){
  //   return this.form1.get('confirmPwd');
  // }
