import {ModelBase} from '../Base/base.model';
import {MagazineNewsModel} from './magazine.news.model';
import {TestimonialModel} from './testimonial.model';
import {MagazineInformationModel} from './magazine.information.model';
import {TrackersModel} from './trackers.model';

export class HomeModel extends ModelBase {

	public latest_news:MagazineNewsModel [];
  public testimonial:TestimonialModel[];
  public magazine_information:MagazineInformationModel;
  public visitors_count:TrackersModel;
  public most_download_article:[];
  public most_viewed_article:[];
  public archive:[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {};
	}


}
