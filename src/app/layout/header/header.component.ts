import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../core/global/url.name';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  magazine_information:MagazineInformationModel = null;

  homeModel:HomeModel;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.magazine_information = this.homeModel.magazine_information;
      }
    });
  }


  getHomeLink(){
    return '/' + UrlName.home();
  }

  getNews(){
    return '/' + UrlName.news();
  }

  getAboutUs(){
    return '/' + UrlName.aboutUs();
  }

  magazineGoals(){
    return '/' + UrlName.magazineGoals();
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

  getEvents(){
    return '/' + UrlName.events();
  }

  getActivities(){
    return '/' + UrlName.activities();
  }

  getVideos(){
    return '/' + UrlName.videos();
  }

  getPhotos(){
    return '/' + UrlName.photos();
  }

  getPublicationRules(){
    return '/' + UrlName.publicationRules();
  }

}
