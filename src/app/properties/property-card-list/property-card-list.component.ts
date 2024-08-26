import { Component, input } from '@angular/core';
import { Property } from '../models/properties';

@Component({
  selector: 'app-property-card-list',
  templateUrl: './property-card-list.component.html',
  styleUrl: './property-card-list.component.scss',
})
export class PropertyCardListComponent {
  properties = input.required<Property[]>();
}
