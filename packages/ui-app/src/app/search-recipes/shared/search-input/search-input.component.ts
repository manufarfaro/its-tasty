import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-input',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Input() value = '';
  @Output() keyUpEnter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onKey(event: any): void {
    this.value = event.target.value;
  }

  public onKeyEnter(event: any): void {
    this.keyUpEnter.emit(event.target.value);
  }
}
