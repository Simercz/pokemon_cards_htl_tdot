import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-move',
  standalone: true,
  imports: [],
  templateUrl: './move.component.html',
  styleUrl: './move.component.css'
})
export class MoveComponent {
  @Input() moveName: string = 'Placeholder';
  @Input() moveDescription: string = 'Placeholder Description';
  @Input() moveDamage: string = 'Placeholder Move';
}
