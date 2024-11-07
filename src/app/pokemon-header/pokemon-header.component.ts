import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-header.component.html',
  styleUrl: './pokemon-header.component.css'
})
export class PokemonHeaderComponent {
  @Input() pokemonName: string = 'Placeholder';
  @Input() pokemonType: string = 'Placeholder Type';
  @Input() pokemonHP: string = '0';

}
