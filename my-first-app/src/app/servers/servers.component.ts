import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  selector: 'app-servers', // element selector
  // template: `
  //   <app-server></app-server> 
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //property
  serverCreationStatus = 'No server was created!'; //property
  serverName = 'Testserver'; //property
  serverCreated = false; //property
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; //property
    }, 2000); //setTimeout is a javascript function
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true; //property
    this.servers.push(this.serverName); //property
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName; //property
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value; //property
  }

}
