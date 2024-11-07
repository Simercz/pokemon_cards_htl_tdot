import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ability',
  standalone: true,
  imports: [],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.css'
})
export class AbilityComponent {
  @Input() abilityName: string = 'Placeholder';
  @Input() abilityDescription: string = 'Placeholder description';
}
