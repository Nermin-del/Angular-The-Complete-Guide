import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) { // This is the custom event that we created in the cockpit component
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName, 
      content: serverData.serverContent
    });
  }

  onBlueprintAdded( blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  // This is used to remove the first element from the array.
  // Splice is used to remove an element from an array.
  // Since we are removing the first element, we pass 0 as the first argument.
  onDestroyFirst() {
    this.serverElements.splice(0, 1); 
  }
}
