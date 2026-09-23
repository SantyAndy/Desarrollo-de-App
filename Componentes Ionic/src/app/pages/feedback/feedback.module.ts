import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';
@NgModule({ imports: [CommonModule, IonicModule, FeedbackPageRoutingModule], declarations: [FeedbackPage] })
export class FeedbackPageModule {}
