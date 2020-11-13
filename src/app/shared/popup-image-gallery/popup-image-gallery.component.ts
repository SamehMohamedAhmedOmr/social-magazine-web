import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'kt-popup-image-gallery',
  templateUrl: './popup-image-gallery.component.html',
  styleUrls: ['./popup-image-gallery.component.scss']
})
export class PopupImageGalleryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupImageGalleryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title:string,
      images: [],
    }
  ) {
  }

  ngOnInit() {

  }

  onNoClick() {
    this.dialogRef.close();
  }

}
