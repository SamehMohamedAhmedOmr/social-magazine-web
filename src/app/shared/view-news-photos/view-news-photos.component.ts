import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-news-photos',
  templateUrl: './view-news-photos.component.html',
  styleUrls: ['./view-news-photos.component.scss']
})
export class ViewNewsPhotosComponent implements OnInit {

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

}
