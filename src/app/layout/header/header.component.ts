import {Component, OnInit} from '@angular/core';
import {RoutesName} from '../../core/global/routes.name';

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
    return '/' + RoutesName.home();
  }

  getAboutUs(){
    return '/' + RoutesName.aboutUs();
  }

  getTestimonial(){
    return '/' + RoutesName.testimonial();
  }

  getAdvisoryBody(){
    return '/' + RoutesName.advisoryBody();
  }

  getMagazineCategory(){
    return '/' + RoutesName.magazineCategory();
  }

  getSubmitArticle(){
    return '/' + RoutesName.submitArticle();
  }

  getContactUs(){
    return '/' + RoutesName.contactUs();
  }

  getPublicationRules(){
    return '/' + RoutesName.publicationRules();
  }

}
