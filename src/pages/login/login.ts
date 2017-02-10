import {Component, Injectable} from '@angular/core';

import { NavController } from 'ionic-angular';

import * as Api from '../api/api'
import {RequestOptions, Headers, Http} from "@angular/http";
import {ajax} from "rxjs/observable/dom/ajax";
import {MainPage} from "../main/main";


@Component({
  templateUrl: 'login.html'
})

@Injectable()
export class LoginPage {
  user:string;
  pass:string;
  loginAction(){
    if (this.user==null||this.pass==null){
      alert("账号密码格式不对");
      return;
    }else {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      let deviced=Api.loginurl+"?deviceId="+this.user+this.pass;
      this.http.get(deviced, options).toPromise()
        .then(res =>{
          this.navCtrl.push(MainPage);
        })
        .catch(err => {
          alert(err);
        });
     }
  }
  constructor(public navCtrl: NavController,private http:Http) {

  }



}

