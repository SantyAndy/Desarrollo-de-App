import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: false,
})
export class FormsPage {
  name = '';
  comment = '';
  otpValue = '';
  volume = 45;
  level = 'beginner';
  mode = 'virtual';
  termsAccepted = false;
  notifications = true;
}
