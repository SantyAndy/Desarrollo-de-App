import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: false,
})
export class FeedbackPage {
  alert = false;
  toast = false;
  progress = 0.65;

  advanceProgress(): void {
    this.progress = this.progress >= 1 ? 0.25 : Math.min(this.progress + 0.15, 1);
  }
}
