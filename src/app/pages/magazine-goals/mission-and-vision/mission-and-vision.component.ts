import {Component, Input, OnInit} from '@angular/core';
import {MagazineInformationModel} from '../../../core/models/section-module/magazine.information.model';

@Component({
  selector: 'app-mission-and-vision',
  templateUrl: './mission-and-vision.component.html',
  styleUrls: ['./mission-and-vision.component.scss']
})
export class MissionAndVisionComponent implements OnInit {

  @Input() information:MagazineInformationModel = null;

  constructor() { }

  ngOnInit(): void {
  }

}
