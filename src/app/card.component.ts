import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'angular-logicspark-test';
  @Input() headtitle = "";
  @Input() content= "";
}
