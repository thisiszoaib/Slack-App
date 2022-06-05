import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Chat } from 'src/models/chats.class';
import { AuthenticationService } from '../services/authentication.service';
import  * as admin  from 'firebase-admin';
@Component({
  selector: 'app-direkt-chat',
  templateUrl: './direkt-chat.component.html',
  styleUrls: ['./direkt-chat.component.scss']
})
export class DirektChatComponent implements OnInit {


  chat = new Chat(); 

  @Input() data:string;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  
  } 
 

}
