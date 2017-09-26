import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("My Recipe 1", "My Description 1", "https://goo.gl/2YPdq8"),
    new Recipe("My Recipe 2", "My Description 2", "https://goo.gl/cfNznn")
  ];

  constructor() { }

  ngOnInit() {
  }

}
