import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  @Input() link:string = null;

  constructor() { }

  ngOnInit(): void {
  }

  extractVideoID(video) {
    // tslint:disable-next-line:variable-name
    let video_id = video.split('v=')[1];
    // tslint:disable-next-line:prefer-const
    let ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }

}
