import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  stateFlags: Array<Boolean> = [false, null];
  userForm: FormGroup;
  tempEmail: string = "";
  phoneNumber: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.phoneNumber = this.userForm.get('phone') as FormControl;
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
    // send post request
    this.stateFlags = [false, true];
  }

  private toggleModal() {
    if (this.tempEmail.length > 3){
      let formEmail = this.userForm.get('email') as FormControl;
      formEmail.setValue(this.tempEmail);
      this.stateFlags[0] = true;
    }
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(this.tempEmail),
      phone: this.formBuilder.control(null),
      msg: this.formBuilder.control(null)
    });
  }

}
