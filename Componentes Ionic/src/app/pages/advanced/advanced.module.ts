import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { AdvancedPageRoutingModule } from './advanced-routing.module';
import { AdvancedPage } from './advanced.page';
@NgModule({ imports: [CommonModule, IonicModule, AdvancedPageRoutingModule], declarations: [AdvancedPage] })
export class AdvancedPageModule {}
