import { Component, OnInit } from '@angular/core';
import { ChangePasswordService} from '../services/dashboardSevcice';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  pass;
  constructor(private walletService:ChangePasswordService) { }

  ngOnInit(): void {
  }

  fetchOneWallet(id:string)
  {
    this.walletService.getPass(id).subscribe((data)=>{
      console.log(data);
      //this.pass=data;
    })
  }
}
