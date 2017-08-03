import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // modal, contact inputs, contactErr, formErr, nameErr, msgError, emailError
  stateFlags: Array<Boolean> = [false, null, false, false, false, false, false];
  regexEmail = new RegExp('^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$');
  userForm: FormGroup;
  tempEmail: string = "";
  phoneNumber: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.phoneNumber = this.userForm.get('phone') as FormControl;
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(this.tempEmail),
      phone: this.formBuilder.control(null),
      msg: this.formBuilder.control(null)
    });
  }

  private formatNumber(key) {
    if (!isNaN(key)){
      switch (this.phoneNumber.value.length) {
        case 1:
          if (this.phoneNumber.value[0] != '('){
            this.phoneNumber.setValue("("+this.phoneNumber.value);
          }
          break;
        case 5:
          if (this.phoneNumber.value[4] != ')'){
            this.phoneNumber.setValue(this.phoneNumber.value.substring(0,4) + ") " + this.phoneNumber.value[4]);
          }
          break;
        case 6:
          if (this.phoneNumber.value[5] != ' '){
            this.phoneNumber.setValue(this.phoneNumber.value.substring(0,5) + " " + this.phoneNumber.value[5]);
          }
          break;
        case 10:
          if (this.phoneNumber.value[9] != '-'){
            this.phoneNumber.setValue(this.phoneNumber.value.substring(0,9) + "-" + this.phoneNumber.value[9]);
          }
          break;
        case 15:
          this.phoneNumber.setValue(this.phoneNumber.value.substring(0,14));
        default:
          
      }
    } else {
      this.phoneNumber.setValue(this.phoneNumber.value.substring(0,this.phoneNumber.value.length-1));
    }
  }

  private send() {
    this.stateFlags = [true, null, false, false, false, false, false];
    if (!this.regexEmail.test(this.userForm.value['email'])){
      this.stateFlags[6] = true;
      this.stateFlags[3] = true; 
    }
    if (!this.userForm.value['name']) {
      this.stateFlags[4] = true;
      this.stateFlags[3] = true; 
    }
    if (!this.userForm.value['msg']) {
      this.stateFlags[5] = true;
      this.stateFlags[3] = true; 
    }
    if (this.regexEmail.test(this.userForm.value['email']) && this.userForm.value['name'] && this.userForm.value['msg']) {
      // send post request
      this.stateFlags = [false, true, false, false, false, false, false];
    }
  }

  private toggleModal() {
    if (this.regexEmail.test(this.tempEmail)){
      let formEmail = this.userForm.get('email') as FormControl;
      formEmail.setValue(this.tempEmail);
      this.stateFlags[0] = true;
      this.stateFlags[2] = false;
    } else {
      this.stateFlags[2] = true;
    }
  }
}
