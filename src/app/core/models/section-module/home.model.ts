import {ModelBase} from '../Base/base.model';
import {MagazineNewsModel} from './magazine.news.model';
import {TestimonialModel} from './testimonial.model';
import {MagazineInformationModel} from './magazine.information.model';
import {VideosModel} from './videos.model';
import {PhotosModel} from './photos.model';
import {ActivityModel} from './activity.model';
import {EventsModel} from './events.model';

export class HomeModel extends ModelBase {

  public latest_news: MagazineNewsModel[];
  public testimonial: TestimonialModel[];
  public magazine_information: MagazineInformationModel;
  public visitors_count: number;
  public most_viewed_news: MagazineNewsModel[];

  public latest_videos: VideosModel[];
  public latest_photos: PhotosModel[];
  public latest_activities: ActivityModel[];
  public latest_events: EventsModel[];

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {};
  }


}
