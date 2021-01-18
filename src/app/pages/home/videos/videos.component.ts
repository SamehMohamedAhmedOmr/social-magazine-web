import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos = [
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
    { content: 'lorem lom', title: 'slide1', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '2020/1/09' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
