import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { MediaPageRoutingModule } from './media-routing.module';
import { MediaPage } from './media.page';
@NgModule({ imports: [CommonModule, IonicModule, MediaPageRoutingModule], declarations: [MediaPage] })
export class MediaPageModule {}
