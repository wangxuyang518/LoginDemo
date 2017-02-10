import {Component, Injectable} from '@angular/core';

import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import * as Api from '../api/api'
import {RequestOptions, Headers, Http} from "@angular/http";



@Component({
  templateUrl: 'main.html'
})

export class MainPage {
  constructor(public navCtrl: NavController) {

  }

}

