import { Component, Input, OnInit } from '@angular/core';
import { EventsModel } from 'src/app/core/models/section-module/events.model';

@Component({
  selector: 'app-home-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid1.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid2.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid3.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid4.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid5.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid6.jpg', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', images: 'assets/images/slid7.jpg', created_at: '2020/1/09' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
