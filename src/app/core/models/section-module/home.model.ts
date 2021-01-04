import {ModelBase} from '../Base/base.model';
import {MagazineNewsModel} from './magazine.news.model';
import {TestimonialModel} from './testimonial.model';
import {MagazineInformationModel} from './magazine.information.model';
import {TrackersModel} from './trackers.model';
import {AdvisoryBodyModel} from './advisory.body.model';
import {MagazineCategoryModel} from './magazine.category.model';
import {PublicationRulesModel} from './publication.rules.model';
import {WhoIsUsModel} from './who.is.us.model';
import {MagazineGoalsModel} from './magazine.goals.model';

export class HomeModel extends ModelBase {

	public latest_news:MagazineNewsModel[];
  public testimonial:TestimonialModel[];
  public magazine_information:MagazineInformationModel;
  public visitors_count:TrackersModel;
  public most_viewed_news:MagazineNewsModel[];
  public advisory_body:AdvisoryBodyModel[];
  public magazine_categories:MagazineCategoryModel[];
  public publication_rules:PublicationRulesModel[];
  public who_is_us:WhoIsUsModel[];
  public magazine_goals:MagazineGoalsModel[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {};
	}


}
