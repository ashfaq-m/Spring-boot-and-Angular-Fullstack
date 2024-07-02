import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages : Array<any> = [];

  constructor() {
    this.init();
  }

  init():void{
    this.insert({
      name: 'Ashfaq',
      email: 'ashfaq@gmail.com',
      message: 'Hello from Angular'
    });
    this.insert({
      name: 'Asra',
      email: 'asra@gmail.com',
      message: 'Hello from Angular'
    });
    this.insert({
      name: 'Haleema',
      email: 'aleema@gmail.com',
      message: 'Hello from Angular'
    });
  }

  insert(message : {name : string, email : string, message : string}):void{
       this.messages.push(message);
  }

  getAllMessages() : any {
    return this.messages;
  }

  deleteMessage(index : number) : void{
    this.messages.splice(index, 1);
  }

}
