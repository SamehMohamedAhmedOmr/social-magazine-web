import {Component, Input, OnInit} from '@angular/core';
import {Parser} from '@angular/compiler';
import {LocalStorageService} from '../../../core/services/localStorage.service';
import {TrackersService} from '../../../core/services/Section-Module/trackers.service';
import {TrackersModel} from '../../../core/models/section-module/trackers.model';

@Component({
  selector: 'app-visitor-count',
  templateUrl: './visitor-count.component.html',
  styleUrls: ['./visitor-count.component.scss']
})
export class VisitorCountComponent implements OnInit {

  @Input() visitor_count = 0;
  counter:number[] = [];
  number_of_digit = 9;

  constructor(private trackersService: TrackersService) {
  }

  ngOnInit(): void {
    this.newVisitor();
    this.initializeCounter();
  }


  newVisitor () {
    const model = new TrackersModel(null);

    this.trackersService.create(model).subscribe(resp => {
    } , handler => {
    });
  }


  initializeCounter(){
    for(let i = 0, j = 1; i < this.number_of_digit; i++, j*=10){
      let num = this.visitor_count / j;
      let mod = Math.floor(num % 10);
      this.counter.push(mod);
    }
  }


}
