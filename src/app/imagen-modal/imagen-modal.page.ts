import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ModalController,NavParams,IonSlides} from "@ionic/angular"
import{LoadingController} from '@ionic/angular'

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
  
})
export class ImagenModalPage implements OnInit {
  @ViewChild("slides") slides : IonSlides;
  @ViewChild('slides',{read:ElementRef}) slide:ElementRef;


   indice : number;

   

  imagenes=[
   
     //Mis imagenes
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

  constructor(private modalCtrl: ModalController, private navparams:NavParams, private loadingController:LoadingController) { 
  const loading = this.loadingController.create({
    message:'Su imagen esta cargando...',
    duration:2000




  }).then(loading => loading.present());
  
  
  
  
    this.indice = this.navparams.get('index');
  console.log(this.indice);

  }

  ngOnInit() {
    this.slides.slideTo(this.indice,0)
  }
  cerrarModal(){
    this.modalCtrl.dismiss();





  }
   zoom(zoom:boolean){
    if(zoom){
      this.slide.nativeElement.swiper.zoom.in()
    }
    else{
      this.slide.nativeElement.swiper.zoom.out()
    }
  }
  

}
