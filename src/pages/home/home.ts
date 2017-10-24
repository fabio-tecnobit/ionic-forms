import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private myForm: FormGroup;
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      campo1: [],
      campo2: []
    });


  }
  onSubmitMyForm(): void {

     let myForm = this.myForm.value;
     console.log(myForm); 
     console.log(myForm['campo1']);
    /*this.exemploForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    // });*/
  }

}
