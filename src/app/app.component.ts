import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private meta: Meta
  ) {
    this.meta.addTag({ name: 'Version', content: version });
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
    });
  }
}
