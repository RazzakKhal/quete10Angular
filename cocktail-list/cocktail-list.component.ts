import { Component } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
cocktails : Cocktail [];



  constructor(cocktailService : CocktailService){

    this.cocktails = cocktailService.getCocktails();


  }
}
