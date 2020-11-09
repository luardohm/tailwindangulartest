import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evdi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() size: 'large' | 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
