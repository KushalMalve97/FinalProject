import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-custdashboard',
  templateUrl: './custdashboard.component.html',
  styleUrls: ['./custdashboard.component.css']
})
export class CustdashboardComponent implements OnInit {
  //urlCID : any;
  constructor() { }
  ngOnInit() {
    //this.urlCID = this.ar.snapshot.params['custId'];
    //console.log("cid:"+this.urlCID);
    //if(this.urlCID == localStorage.getItem('custId')){
      //this.router.navigate(['customerdashboard',this.urlCID])
   // }
    //else {
      //alert("please login again");
      //this.router.navigate(['custlogin'])
    //}

  }

/*  commented by radha
  gotoPlaceOrder():void{
    this._router.navigate(['/placeorder'])
  }
*/

  // customerorderhistory():void{
  //   this._router.navigate(['/customerorderhistory/:cid']);
  //   console.log("customer's ordershistory is clicked");
  // }
//   placeorder():void{
//     this._router.navigate(['/placeorder/:cid']),
//     console.log("placing the orders");
//   }
//   showwallet():void{
//     this._router.navigate(['/showwalletdetails/:cid']);
//     console.log("show the wallet details");
//   }
// 
}