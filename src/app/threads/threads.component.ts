import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { collection } from 'firebase/firestore';
import { Chat } from 'src/app/models/chats.class';

import { AuthenticationService } from '../services/authentication.service';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit, OnChanges {


  channelId: any = '';
  chats: any = [] = [];
  threads: any = [] = [];
  index: any = ([] = []);
  chat = new Chat();
  thread_placeholder: any;
  showchatt = false;
  send_message: any;


 @Input() thread !: any;
//  @Input() thread: any = [];
//  public thread_array: any = [];

  constructor(
    private firestore: AngularFirestore,
    public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    public  threadService: ThreadService,
  ) {}


  ngOnInit(): void {

    console.log("Heloo still");

    // this.thread_array.push(this.thread)


    console.log("Recieved Thread: ", this.thread);

  }

  ngOnChanges(changes: SimpleChanges): void {

    // this.authService.
   console.log(changes);
   this.firestore
   .collection('threads', (ref) =>
     ref.where('chatID', '==', this.thread)
   )
   .valueChanges({ idField: 'customIdName' })
   .subscribe((changes: any) => {
     console.log('changes: ', changes);
     this.threads = changes;
     this.thread_placeholder = this.thread.author;
   });
  }

  sendMessage(text_value: any) {
    this.firestore.collection('threads').add(
      {
        message:text_value,
        author: this.thread.author,
        chatID : this.thread,
        chatChannelId: this.channelId,

      }
    )
    this.send_message = text_value;
    console.log("Entered Value: ", this.send_message );
  //  this.clearChannel();
    this.showchatt = true;
  }

  clearChannel() {
    this.chat = new Chat();
  }
}
