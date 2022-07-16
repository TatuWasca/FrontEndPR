import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternarService {
  @Output() disparadorAlternar: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
