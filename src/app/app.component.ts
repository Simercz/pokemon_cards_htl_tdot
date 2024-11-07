import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemonHeaderComponent} from './pokemon-header/pokemon-header.component';
import {NgOptimizedImage} from '@angular/common';
import {MoveComponent} from './move/move.component';
import {AbilityComponent} from './ability/ability.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonHeaderComponent, NgOptimizedImage, MoveComponent, AbilityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon_cards_htl_tdot';
  outline: string = 'blue'


  outlineColor: string = `background-color:${this.outline};border-color:${this.outline};`;
}
