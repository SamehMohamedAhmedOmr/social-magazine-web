import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UrlName } from 'src/app/core/global/url.name';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  photos = [
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

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }

  detailsUrl(slug){
    return  '/' + UrlName.photos() + '/' + slug;
  }
}
