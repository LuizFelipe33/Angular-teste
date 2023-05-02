import { Component } from '@angular/core';
import { Animal } from 'src/app/Interface/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Bath", type: "Dog",age: 7 },
    {name: "Lisa", type: "Dog", age: 3 },
    {name: "Tapioca", type: "Cat", age: 2 }
  ]

  animalDetails = ''

  showAge(animal: Animal){
    this.animalDetails = `O pete ${animal.name} tem ${animal.age} anos`
  }
}
