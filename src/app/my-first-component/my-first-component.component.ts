import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent {

  name : string = '';
  email : string = '';
  message : string = '';
  isSubmitted : boolean = false;
  formData : Array<any> = [];

  onSubmit() {
    // console.log('Displaying Name : '+this.name);
    // console.log('Displaying Email : '+this.email);
    // console.log('Displaying Message : '+this.message)
    this.isSubmitted = true;
    this.formData.push({
      'name' : this.name,
      'email' : this.email,
      'message' : this.message
      }
    );
    console.log(this.formData)
  }

  deleteData(index : number) {
     this.formData.splice(index, 1);
  }
}
