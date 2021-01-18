import {Component, OnInit, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  @Input() video_id = null;
  @Input() height = null;

  // tslint:disable-next-line:variable-name
  constructor() {
  }

  ngOnInit() {
  }

}
