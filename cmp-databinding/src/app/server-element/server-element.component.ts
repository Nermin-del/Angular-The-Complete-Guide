import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // This is the default value. It is used to encapsulate the styles of the component. It is used to prevent the styles of the component from affecting the styles of the rest of the application. 
  // None is used to allow the styles in this component to be applied globally. This is not recommended.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }; //srvElement is the alias for the element property
  // This is a property of the class ServerElementComponent,@Input is a decorator that allows us to bind to this property from outside.
  // This is the custom event that we created in the cockpit component
  @Input() name: string; // This is a property of the class ServerElementComponent,@Input is a decorator that allows us to bind to this property from outside.
  @ViewChild('heading', {static: true}) header: ElementRef; // This is used to get a reference to the element with the id heading in the template.
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef; // This is used to get a reference to the element with the id contentParagraph in the template.

  constructor() {
    console.log('constructor called!');

  }

  // OnChanges is a lifecycle hook. It is executed when the component is initialized.
  // OnChanges is executed when the component is initialized and when the component is updated.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // ngOnInit is a lifecycle hook. It is executed when the component is initialized.
  // ngOnInit is executed when the component is initialized.
  // textcontent is used to get the text content of the element.
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent); // This is used to get the text content of the element with the id heading in the template.
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent); // This is used to get the text content of the element with the id contentParagraph in the template.
    
  }

  // ngDoCheck is a lifecycle hook. It is executed when the component is initialized.
  // ngDoCheck is executed when the component is initialized and when the component is updated.
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // ngAfterContentInit is a lifecycle hook. It is executed when the component is initialized.
  // ngAfterContentInit is executed when the component is initialized.
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent); // This is used to get the text content of the element with the id contentParagraph in the template.

  }

  // ngAfterContentChecked is a lifecycle hook. It is executed when the component is initialized.
  // ngAfterContentChecked is executed when the component is initialized and when the component is updated.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  // ngAfterViewInit is a lifecycle hook. It is executed when the component is initialized.
  // ngAfterViewInit is executed when the component is initialized.
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  // This is a lifecycle hook. It is executed when the component is initialized
  // ngAfterViewChecked is executed when the component is initialized and when the component is updated.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  // ngOnDestroy is a lifecycle hook. It is executed when the component is initialized
  // ngOnDestroy is executed when the component is destroyed.
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
