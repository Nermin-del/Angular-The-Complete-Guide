import { Component } from "@angular/core";

@Component ({ // This is a decorator
    selector: 'app-header',
    templateUrl: './header.component.html',
}) 
export class  HeaderComponent  { // This is a class
    collapsed = true; // This is a property
}