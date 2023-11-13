import { Component } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements onInIt {
  canOpenMoreBoxes = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }

}
