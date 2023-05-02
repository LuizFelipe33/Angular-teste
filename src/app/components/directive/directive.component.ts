import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit{

  size = 60
  font = 'Arial';
  color = 'red';
  classes = ['green-title', 'small-title']

  constructor(){}
  ngOnInit(): void {
    
  }
}
