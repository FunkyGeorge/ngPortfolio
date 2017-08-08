import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChildren('input') vc;

  // modal, contact inputs, contactErr, formErr, nameErr, msgErr, emailErr, phoneErr
  stateFlags: Array<Boolean> = [false, null, false, false, false, false, false, false];
  regexEmail = new RegExp('^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$');
  userForm: FormGroup;
  tempEmail: FormGroup;
  phoneNumber: FormControl;
  errMessage: String = "Please complete required fields";

  constructor(private formBuilder: FormBuilder, private http: HttpService) {
    this.buildForm();
  }

  ngOnInit() {
    this.phoneNumber = this.userForm.get('phone') as FormControl;
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      phone: this.formBuilder.control(""),
      msg: this.formBuilder.control(null)
    });
    this.tempEmail = this.formBuilder.group({
      email: this.formBuilder.control(null)
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
    this.stateFlags = [true, null, false, false, false, false, false, false];
    if (!this.regexEmail.test(this.userForm.value['email'])){
      this.errMessage = "Please enter a valid email";
      this.stateFlags[6] = true;
      this.stateFlags[3] = true; 
    }
    if (this.userForm.value['phone'] && this.userForm.value['phone'].length != 14){
      this.errMessage = "Phone number is invalid";
      this.stateFlags[7] = true;
      this.stateFlags[3] = true;
    }
    if (!this.userForm.value['name']) {
      this.errMessage = "Please complete required fields";
      this.stateFlags[4] = true;
      this.stateFlags[3] = true; 
    }
    if (!this.userForm.value['msg']) {
      this.errMessage = "Please complete required fields";
      this.stateFlags[5] = true;
      this.stateFlags[3] = true; 
    }
    if (this.regexEmail.test(this.userForm.value['email']) && this.userForm.value['name'] && this.userForm.value['msg'] &&
        (!this.userForm.value['phone'] || this.userForm.value['phone'].length == 14)) {
      // send post request
      this.http.post('/contacts/create', this.userForm.value)
      .then(response => {
        console.log(response);
        this.stateFlags = [false, true, false, false, false, false, false, false];
      })
      .catch(err => console.log(err));
    }
  }

  private toggleModal() {
    if (this.regexEmail.test(this.tempEmail.value.email)){
      let formEmail = this.userForm.get('email') as FormControl;
      formEmail.setValue(this.tempEmail.value.email);
      this.stateFlags[0] = true;
      this.stateFlags[2] = false;
      this.vc.first.nativeElement.focus();
    } else {
      this.stateFlags[2] = true;
    }
  }
}
