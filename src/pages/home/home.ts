import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private myForm: FormGroup;
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
  private alertCtrl: AlertController
) {

    this.myForm = formBuilder.group({
      campo1: [],
      campo2: []
    });


  }
  onSubmitMyForm(): void {
     let frm = this.myForm.value;
     let v1 = frm['campo1'];
     let v2 = frm['campo2'];  
     let total  =parseInt(v1)+parseInt(v2);   
     this.showAlert(total.toString());
  }
  showAlert(message:string):void{
    let alert = this.alertCtrl.create({
      message: message,
      buttons:['ok']
    });
    alert.present();
  }

}
