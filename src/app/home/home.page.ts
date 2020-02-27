import { Component } from '@angular/core';
import{ModalController} from '@ionic/angular';
import {ImagenModalPage} from '../imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modelCtrl:ModalController){}

  imagenes=[
   

    '1424578.jpg',
    '1455556.jpg',
    '1425344.jpg',
    '1511565.jpg',

    '1520002.jpg',

    '1522222.jpg',

    '1522323.jpg',

    '1522657.jpg',

    '1523333.jpg',

    '1523565.jpg',

    '1526626.jpg',

    '1523256.jpg',

    

  ];


  verImagen(index){
    this.modelCtrl.create({
   component:ImagenModalPage,
   componentProps :{
     index:index




   }
    }).then( model => model.present())



  }


}
