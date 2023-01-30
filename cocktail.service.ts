import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktail1 = new Cocktail('Razzak', '10euros', 'imageducocktail');
cocktail2 = new Cocktail('Nicolas', '15euros', 'imageducocktailnico');

cocktails : Cocktail [] = [this.cocktail1, this.cocktail2];

  constructor() {

   }

  getCocktails(){
    return this.cocktails;
  }
}
