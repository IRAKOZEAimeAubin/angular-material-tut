import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { PropertyCardListComponent } from './property-card-list/property-card-list.component';
import { HomeComponent } from './home/home.component';
import { PropertiesHttpService } from './services/properties-http.service';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AddressPipe } from './pipes/address.pipe';

export const propertiesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    PropertyComponent,
    PropertyCardListComponent,
    HomeComponent,
    AddressPipe,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forChild(propertiesRoutes),
  ],
  exports: [
    PropertyComponent,
    PropertyCardListComponent,
    HomeComponent,
    AddressPipe,
  ],
  providers: [PropertiesHttpService],
})
export class PropertiesModule {}
