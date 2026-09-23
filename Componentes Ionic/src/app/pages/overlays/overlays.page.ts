import { Component } from '@angular/core';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.page.html',
  styleUrls: ['./overlays.page.scss'],
  standalone: false,
})
export class OverlaysPage {
  modal = false;
  popover = false;
  actionSheet = false;
}
