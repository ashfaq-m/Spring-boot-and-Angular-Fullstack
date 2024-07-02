import {Component, inject} from '@angular/core';
import {MyFirstService} from "../my-first.service";

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
  //variable inject
  //private service : MyFirstService = inject(MyFirstService);

  constructor(
    private service : MyFirstService
  ) {
    this.isSubmitted = true;
    this.formData = this.service.getAllMessages();
  }

  onSubmit() {
    // console.log('Displaying Name : '+this.name);
    // console.log('Displaying Email : '+this.email);
    // console.log('Displaying Message : '+this.message)
    this.isSubmitted = true;
    this.service.insert({
      'name' : this.name,
      'email' : this.email,
      'message' : this.message
      }
    );
    console.log(this.formData)
  }

  deleteData(index : number) {
     this.service.deleteMessage(index);
  }
}
