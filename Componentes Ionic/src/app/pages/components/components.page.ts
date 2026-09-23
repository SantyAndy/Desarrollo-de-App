import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  standalone: false,
})
export class ComponentsPage {
  clicks = 0;
  termsAccepted = false;
  alertVisible = false;
  actionSheetVisible = false;

  showAlert(): void {
    this.alertVisible = true;
  }

  closeAlert(): void {
    this.alertVisible = false;
  }

  showActionSheet(): void {
    this.actionSheetVisible = true;
  }

  closeActionSheet(): void {
    this.actionSheetVisible = false;
  }
}
