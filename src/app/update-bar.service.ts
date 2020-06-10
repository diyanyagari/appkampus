import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class UpdateBarService {

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription; 

  constructor() { }

  closeBar() {    
    this.invokeFirstComponentFunction.emit();    
  } 
}
