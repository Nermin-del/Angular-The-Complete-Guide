import { Component } from '@angular/core';

/*@ = A decorator that enchances elements to your code */
@Component({ 
    selector: 'app-server', //selector is used to select the element in the html file
    templateUrl: './server.component.html', //templateUrl is used to select the html file
    styles: [`
        .online {
            color: white;
        }
    
     `] //styles is used to select the css file
}) 
export class ServerComponent {
    serverId: number = 10; //serverId is a property of the class
    serverStatus: string = 'offline'; //serverStatus is a property of the class

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; //serverStatus is a property of the class
    }

    getServerStatus() {
        return this.serverStatus; //returns the value of the serverStatus property
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'; //returns the value of the serverStatus property and checks if it is online or offline
    }
}