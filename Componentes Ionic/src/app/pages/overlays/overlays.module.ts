import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { OverlaysPageRoutingModule } from './overlays-routing.module';
import { OverlaysPage } from './overlays.page';
@NgModule({ imports: [CommonModule, IonicModule, OverlaysPageRoutingModule], declarations: [OverlaysPage] })
export class OverlaysPageModule {}
