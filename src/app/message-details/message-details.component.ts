import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {

  @Input()
  formData : any = [];

  @Input()
  index : number = -1;

  @Output()
  delete : EventEmitter<number> = new EventEmitter<number>();

  OnDelete() {
     this.delete.emit(this.index)
  }
}
