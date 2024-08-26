import { Component, computed, effect, inject, signal } from '@angular/core';
import { Property } from '../models/properties';
import { PropertiesHttpService } from '../services/properties-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #properties = signal<Property[]>([]);
  propertiesHttpService = inject(PropertiesHttpService);

  singleFamilyProperties = computed(() => {
    const properties = this.#properties();
    return properties.filter(
      (property) => property.propertyType === 'singleFamily'
    );
  });

  condoProperties = computed(() => {
    const properties = this.#properties();
    return properties.filter((property) => property.propertyType === 'condo');
  });

  townHomeProperties = computed(() => {
    const properties = this.#properties();
    return properties.filter(
      (property) => property.propertyType === 'townhome'
    );
  });

  constructor() {
    effect(() => {
      console.log(`Single Family Homes: `, this.singleFamilyProperties());
      console.log(`Condos: `, this.condoProperties());
      console.log(`Town Homes `, this.townHomeProperties());
    });

    this.loadProperties().then(() =>
      console.log(`All properties loaded: `, this.#properties())
    );
  }

  async loadProperties() {
    try {
      const properties = await this.propertiesHttpService.getAllProperties();
      this.#properties.set(properties);
    } catch (err) {
      console.log(err);
    }
  }
}
