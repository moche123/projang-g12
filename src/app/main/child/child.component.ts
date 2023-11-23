import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @ViewChild('paragraph') paragraph!: ElementRef;

  @Input() //*@ => DECORADOR DE ANGULAR
  parentInfo =2;

  @Output()
  childEvent = new EventEmitter<string>();



  constructor(){
    console.log('CONSTRUCTOR');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ON CHANGES');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ON INIT');
  }
  
  ngAfterViewInit(): void {
    console.log('ON AFTER VIEW INIT');
    this.paragraph.nativeElement.style.color = 'blue';
  }


  sendToParent(){
    this.childEvent.emit('INFORMATION TO PARENT')

  }
  
  ngOnDestroy(): void {
    console.log('ON DESTROY');
    
  }



}
