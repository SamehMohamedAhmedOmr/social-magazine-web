import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../core/global/url.name';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getHomeLink(){
    return '/' + UrlName.home();
  }

  getAboutUs(){
    return '/' + UrlName.aboutUs();
  }

  getTestimonial(){
    return '/' + UrlName.testimonial();
  }

  getAdvisoryBody(){
    return '/' + UrlName.advisoryBody();
  }

  getMagazineCategory(){
    return '/' + UrlName.magazineCategory();
  }

  getSubmitArticle(){
    return '/' + UrlName.submitArticle();
  }

  getContactUs(){
    return '/' + UrlName.contactUs();
  }

  getPublicationRules(){
    return '/' + UrlName.publicationRules();
  }

}
