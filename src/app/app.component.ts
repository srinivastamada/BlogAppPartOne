import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FeedService } from './services/feed.service';
import { Helper } from './services/helper.service';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
    providers: [FeedService, Helper]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}