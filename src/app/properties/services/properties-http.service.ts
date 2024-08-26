import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Property } from '../models/properties';

@Injectable()
export class PropertiesHttpService {
  async getAllProperties(): Promise<Property[]> {
    const data = await fetch(`${environment.dataUrl}`);
    return (await data.json()) ?? [];
  }
}
