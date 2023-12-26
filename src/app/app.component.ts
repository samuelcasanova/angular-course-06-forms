import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') referencedForm: NgForm
  genders = ['male', 'female', 'others']
  submittedEmail: string | null = null

  enterDefaultValuesForAllTheForm() {
    this.referencedForm.setValue({
      userData: {
        username: 'defaultUserName',
        email: 'default@email.com'
      },
      secret: 'pet',
      gender: 'male'
    })
  }

  enterDefaultValueForUsername() {
    this.referencedForm.form.patchValue({
      userData: {
        username: 'super user'
      }
    })
  }

  onSubmit() {
    this.submittedEmail = this.referencedForm.value.userData.email
  }
}
