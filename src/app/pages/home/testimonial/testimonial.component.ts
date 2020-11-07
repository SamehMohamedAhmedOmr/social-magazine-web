import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
  }

  slidesStore = [
    { name: 'slide1', content: 'lorem lom', stars: 5, image: 'assets/images/slid1.jpg' },
    { name: 'slide2', content: 'lorem lom', stars: 0, image: 'assets/images/slid2.jpg' },
    { name: 'slide3', content: 'lorem lom', stars: 2, image: 'assets/images/slid3.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },
    { name: 'slide4', content: 'lorem lom', stars: 1, image: 'assets/images/slid4.jpg' },

  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  newArray(num) {
    return new Array(num);
  }
}
