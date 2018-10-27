import {Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  Entered = "";
  title = "";
 @Output() EventEmit = new EventEmitter();


  onclick(){
    const sPost ={
      title: this.title,
      content: this.Entered
    };
    this.EventEmit.emit(sPost);

  }

}
