import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-first-componemt',
  templateUrl: './first-componemt.component.html',
  styleUrls: ['./first-componemt.component.css']
})
export class FirstComponemtComponent implements OnInit{

  nome: string = "luiz";
  
  @Input() name: string = '';
  
  constructor(){}
  ngOnInit(): void {
    
  }
}
