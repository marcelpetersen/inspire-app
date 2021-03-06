import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
    
    redditCategory: string;
    tweetCategory: string;
    tumblrCategory: string;
    userQuote: string;
    userName: string;
    
    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.getDefaults();
    }
    
    getDefaults() {
        this.userQuote = this.navParams.get('quote');
        this.userName = this.navParams.get('username');
        this.redditCategory = this.navParams.get('redditCategory');
        this.tweetCategory = this.navParams.get('tweetCategory');
        this.tumblrCategory = this.navParams.get('tumblrCategory');
    }
    
    setDefaults() {
        this.navCtrl.pop();
        localStorage.setItem('redditCategory', this.redditCategory); localStorage.setItem('tweetCategory', this.tweetCategory);
        localStorage.setItem('tumblrCategory', this.tumblrCategory); localStorage.setItem('quote', this.userQuote);
        localStorage.setItem('username', this.userName);
    }
}
