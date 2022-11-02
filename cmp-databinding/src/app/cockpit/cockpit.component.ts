import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // EventEmitters are used to emit custom events. They are used to pass data from child to parent.
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // () after the method name means that the method is executed when the event occurs.
  // newServerName = ''; // This is the local reference that we created in the cockpit.component.html
  // newServerContent = ''; // This is the local reference that we created in the cockpit.component.html
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; //ViewChild is used to get access to the local reference of the element in the template.
  //ElementRef is used to get access to the element in the template.

  constructor() { }

  ngOnInit(): void { // This is a lifecycle hook. It is executed when the component is initialized.
  }

  onAddServer(nameInput: HTMLInputElement) { // This is the local reference that we created in the cockpit.component.html
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      }); //emit is used to emit the event. The event is emitted with the data that we want to pass to the parent component.
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
