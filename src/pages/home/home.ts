import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    this.init();
  }
  init(){
  setTimeout(() => {
       this.navCtrl.push(LoginPage);
    }, 1000);
  }
}

