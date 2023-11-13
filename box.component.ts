import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})

export class BoxComponent {
  boxNumber: number = 2;
  isEmpty: boolean = false;
}

