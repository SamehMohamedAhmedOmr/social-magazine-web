import { Component, OnInit } from '@angular/core';
import { UrlName } from 'src/app/core/global/url.name';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities = [
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid1.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid5.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid6.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid2.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid7.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid3.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slie9.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid8.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid4.jpg',
      created_at: 'يناير 9 @ 10:00 ص' },
    { content: 'مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات',
      title: 'المشروعات الطبية', slug: 'slug', images: 'assets/images/slid0.jpg',
      created_at: 'يناير 9 @ 10:00 ص' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  detailsUrl(slug){
    return  '/' + UrlName.activities() + '/' + slug;
  }
}
