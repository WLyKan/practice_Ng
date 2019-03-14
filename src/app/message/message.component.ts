import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { // messageService 属性必须是公共属性，因为你将会在模板中绑定到它
    // console.log(messageService.messages);
  }

  ngOnInit() {
  }

}
