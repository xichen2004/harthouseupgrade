import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FrontFetchService } from '../server/front-fetch.service';

@Component({
  selector: 'app-cwevent',
  templateUrl: './cwevent.component.html',
  styleUrls: ['./cwevent.component.css']
})

export class CweventComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public parrallaxUrl;
  public httpContent;
  cweventContents;
  // cweventContents = [
  //   {
  //     title: <string>null,
  //     content: <any>null
  //   }
  // ];
  constructor(public getData: FrontFetchService, private _sanitizer: DomSanitizer) {
    this.getCWEventContent();
  }

  ngOnInit() {
  }

  getCWEventContent() {
    this.getData.postData(this.postData, 'cwevent').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.cweventContents = this.responseData.content;


    }, (err) => {
    });
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}

