import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
import { Helper } from '../../app/services/helper.service';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  articles: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private feedService: FeedService,   private helper: Helper) {

  }

  ngOnInit() {
    this.getPosts('php', 10);
  }

  getPosts(category,limit){
    this.feedService.getPosts(category, limit).subscribe(response => {
      console.log(response.feed.entry);
      this.articles = response.feed.entry;
    })
  }

    getImage(content) {
     return this.helper.getImage(content);
  }

  getContentSnippet(content){
    return this.helper.getContentSnippet(content);
  }



}