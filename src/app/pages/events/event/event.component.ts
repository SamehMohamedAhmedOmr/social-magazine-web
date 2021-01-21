import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events = [
    { content: 'ومكملين معاكم مع ثانى أسبوع من محاضرات أنوار رسالة المجانية لشهر يناير  السبت 9 يناير  محاضرات " التوحيد والخشوع "…',
      title: 'محاضرات أنوار رسالة المجانية لشهر يناير ', slug: 'slug', images: 'assets/images/slid1.jpg', created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'ومكملين معاكم مع ثانى أسبوع من محاضرات أنوار رسالة المجانية لشهر يناير  السبت 9 يناير  محاضرات " التوحيد والخشوع "…',
      title: 'محاضرات أنوار رسالة المجانية لشهر يناير ', slug: 'slug', images: 'assets/images/slid2.jpg', created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'ومكملين معاكم مع ثانى أسبوع من محاضرات أنوار رسالة المجانية لشهر يناير  السبت 9 يناير  محاضرات " التوحيد والخشوع "…',
      title: 'محاضرات أنوار رسالة المجانية لشهر يناير ', slug: 'slug', images: 'assets/images/slid3.jpg', created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'ومكملين معاكم مع ثانى أسبوع من محاضرات أنوار رسالة المجانية لشهر يناير  السبت 9 يناير  محاضرات " التوحيد والخشوع "…',
      title: 'محاضرات أنوار رسالة المجانية لشهر يناير ', slug: 'slug', images: 'assets/images/slid4.jpg', created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'ومكملين معاكم مع ثانى أسبوع من محاضرات أنوار رسالة المجانية لشهر يناير  السبت 9 يناير  محاضرات " التوحيد والخشوع "…',
      title: 'محاضرات أنوار رسالة المجانية لشهر يناير ', slug: 'slug', images: 'assets/images/slid5.jpg', created_at: 'يناير 9 @ 10:00 ص' },
      
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
