import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { NavigationPageRoutingModule } from './navigation-routing.module';
import { NavigationPage } from './navigation.page';
@NgModule({ imports: [CommonModule, IonicModule, NavigationPageRoutingModule], declarations: [NavigationPage] })
export class NavigationPageModule {}
