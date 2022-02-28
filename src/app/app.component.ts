import { Component,ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms'

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  model: any = {};
  @ViewChild('f',{static:false}) myForm: NgForm;

  onSubmit() {
    if(this.myForm.controls.hometelephone.status == "VALID" || this.myForm.controls.mobileno.status == "VALID" || this.myForm.controls.ofctelephone.status == "VALID" ){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    }
  }


  
}
