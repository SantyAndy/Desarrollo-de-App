import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
  standalone: false,
})
export class NavigationPage {
  selectedTab = 'home';

  onTabChange(event: { tab: string }): void {
    this.selectedTab = event.tab;
  }
}
