import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { DataPageRoutingModule } from './data-routing.module';
import { DataPage } from './data.page';
@NgModule({ imports: [CommonModule, FormsModule, IonicModule, DataPageRoutingModule], declarations: [DataPage] })
export class DataPageModule {}
