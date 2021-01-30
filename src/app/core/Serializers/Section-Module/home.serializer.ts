import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {HomeModel} from '../../models/section-module/home.model';

export class HomeSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): HomeModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: HomeModel): any {
    return {};
  }

  toFormData(object: HomeModel): FormData {
    return null;
  }

  public adapt(item: any): HomeModel {
    let object = new HomeModel(null);

    object.latest_news = item.latest_news;
    object.testimonial = item.testimonial;
    object.magazine_information = item.magazine_information;
    object.visitors_count = item.visitors_count;
    object.most_viewed_news = item.most_viewed_news;

    object.latest_videos = item.latest_videos;
    object.latest_photos = item.latest_photos;
    object.latest_activities = item.latest_activities;
    object.latest_events = item.latest_events;

    return object;
  }


  status(status): any {
    return {};
  }

}
