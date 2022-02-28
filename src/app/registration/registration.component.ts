import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit 
{
  constructor() {}
  @ViewChild('f', { static: false }) myForm: NgForm;
  model: any = {};
  passwordsMatching;
  confirmPasswordClass: string = 'form-control';

  ngOnInit() {}

  onSubmit() 
  {
    // if (this.myForm.controls.mobileno.status == 'VALID' &&
    // this.myForm.controls.offno.status == 'VALID'&& 
    if(this.myForm.controls.password.status == 'VALID'&& 
    this.myForm.controls.cpassword.status == 'VALID'
    ) 
    {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    }
  }


  
  // checkPasswordsWithTemplateDrivenForms(form: NgForm) 
  // {
  //   alert(form.value['password'] +" ===, " + form.value['cpassword']);
  //   if (form.value['password'] === form.value['cpassword']) {
  //     this.passwordsMatching = true;
  //     this.confirmPasswordClass = 'form-control is-valid';
  //   } else 
  //   {
  //     this.passwordsMatching = false;
  //     this.confirmPasswordClass = 'form-control is-invalid'
  //   }
  // }
}

