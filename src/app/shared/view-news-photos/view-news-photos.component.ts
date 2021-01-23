import { Component, Input, OnInit } from '@angular/core';
import { UrlName } from 'src/app/core/global/url.name';

@Component({
  selector: 'app-view-news-photos',
  templateUrl: './view-news-photos.component.html',
  styleUrls: ['./view-news-photos.component.scss']
})
export class ViewNewsPhotosComponent implements OnInit {

  @Input() is_news: boolean = true;

  @Input() models:any[] = [];

  news_photos = [
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid1.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid2.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid3.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid4.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid5.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid6.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid7.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid8.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid9.jpg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', images: 'assets/images/slid10.jpg', created_at: '22 ديسمبر، 2020' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  detailsUrl(slug){
    return  (this.is_news) ? '/' + UrlName.news() + '/' + slug : '/' + UrlName.photos() + '/' + slug;
  }

}
