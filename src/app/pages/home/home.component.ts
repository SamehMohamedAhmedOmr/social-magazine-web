import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {TestimonialService} from '../../core/services/Section-Module/testimonial.service';
import {LatestMagazineNewsService} from '../../core/services/Section-Module/latest.magazine.news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials:[] = [];
  latest_news:[] = [];

  constructor(private testimonialService:TestimonialService,
              private latestMagazineNewsService:LatestMagazineNewsService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getTestimonial();
  }

  getTestimonial(){
    this.ngxService.start();
    this.testimonialService.list(null).subscribe(value => {
      this.testimonials  = value;
      this.cdr.markForCheck();
      this.getLatestNews();
    });
  }

  getLatestNews(){
    this.latestMagazineNewsService.list(null).subscribe(value => {
      this.latest_news  = value;
      this.ngxService.stop();

      this.cdr.markForCheck();
    });
  }

}
