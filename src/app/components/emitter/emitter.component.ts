import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {

  Mynumber: number = 0
  onChangeNumber(): void{
    this.Mynumber = Math.floor(Math.random() * 10)
  }
}
