import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // This component and all the other components in this Recipe folder use the same instance of the service
  constructor() { }

  ngOnInit() {
    // subscribe => get informed about any changes
  }

}
