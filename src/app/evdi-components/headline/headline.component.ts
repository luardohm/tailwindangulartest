import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evdi-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {


  @Input() title: string;
  @Input() subtitle: string;
  @Input() size: 'large' | 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
