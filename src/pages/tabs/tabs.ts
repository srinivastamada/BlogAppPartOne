import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed';
import { NewsPage } from '../news/news';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = FeedPage;
  tab2Root: any = NewsPage;
  tab3Root: any = AboutPage;
  constructor() {

  }
}
