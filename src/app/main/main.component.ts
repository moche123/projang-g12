import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isActive = true;
  parentInfo = Math.floor(Math.random() * 5);

  informationReceived = '';

  toggleChildComponent(){
    this.isActive = !this.isActive;
  }

  sendInfoToChild(){
    this.parentInfo = Math.floor(Math.random() * 5);
  }

  receiveChildInformation(information:string){
    this.informationReceived = information;
    
  }

}
