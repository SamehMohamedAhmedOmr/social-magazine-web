import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  videos = [
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=gJFKgwSPU2s', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=1p_DqV5mjM4', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=hiHwoITyuPg', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=1p_DqV5mjM4', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=8N_aay0ddcY', created_at: '22 ديسمبر، 2020' },
    { content: 'lorem lom', title: 'زيارة وزيرة التضامن لتفتتح فرع الشهيد أحمد المنسي بمقر جمعية رسالة بالدقي', slug: 'slug', link: 'https://www.youtube.com/watch?v=hiHwoITyuPg', created_at: '22 ديسمبر، 2020' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
