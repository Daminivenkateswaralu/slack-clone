import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  customBrowseList = [
    {
      iconUrl: "far fa-comment-dots",
      name: "Threads"
    },
    {
      iconUrl: "far fa-comments",
      name: "All DMs"
    },
    {
      iconUrl: "fas fa-stream",
      name: "All unreads"
    },
    {
      iconUrl: "far fa-comment-dots",
      name: "Save items"
    },
    {
      iconUrl: "fas fa-at",
      name: "Mentions & reactions"
     
    }
  ]
  directMessagesList = [
    {
      name: "Keshav",
      iconUrl: "fas fa-user",
      color: "red",
      status: "1"
    },
    {
      name: "Gowtham",
      iconUrl: "fas fa-user",
      color: "orange",
      status: "0"
    },
    {
      name: "Damini",
      iconUrl: "fas fa-user",
      color: "green",
      status: "1"
    },
    {
      name: "Thirumalai",
      iconUrl: "fas fa-user",
      color: "pink",
      status: "1"
    },
    {
      name: "Jegathish",
      iconUrl: "fas fa-user",
      color: "blue",
      status: "0"
    }    
  ]

  channelsList = [
    {
      name:"coda-support",
      iconUrl: "fas fa-lock"
    },
    {
      name:"bug-slayers",
      iconUrl: "fas fa-lock"
    },
    {
      name:"fun pandrom",
      iconUrl: "fas fa-lock"
    },
    {
      name:"general",
      iconUrl: "fas fa-hashtag"
    },
    {
      name:"Add channels",
      iconUrl: "fas fa-plus"
    },
    
  ]

  appsList = [
    {
      name: "Dropbox",
      iconUrl: "fab fa-dropbox"
    },
    {
      name: "mailchimp",
      iconUrl: "fab fa-mailchimp"
    },
    {
      name: "Add apps",
      iconUrl: "fas fa-plus"
    }
  ]

  getCustomBrowses(): object[] {
    return this.customBrowseList;
  }
  getSlackBrowses(): object[] {
    return this.customBrowseList;
  }
  getChannels(): object[] {
    return this.channelsList;
  }
  getDirectMessages(): object[] {
    return this.directMessagesList;
  }
  getApps(): object[] {
    return this.appsList;
  }

  //selected item
  selectedItem: string = "Thread";
  
  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
  getSelectedItem(): string {
    return this.selectedItem;
  }
  constructor() { 
  }
}

