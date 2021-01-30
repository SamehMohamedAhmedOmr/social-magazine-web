import {ModelBase} from '../Base/base.model';
import {AdvisoryBodyModel} from './advisory.body.model';
import {MagazineCategoryModel} from './magazine.category.model';
import {PublicationRulesModel} from './publication.rules.model';
import {WhoIsUsModel} from './who.is.us.model';
import {MagazineGoalsModel} from './magazine.goals.model';

export class DependenciesModel extends ModelBase {

  public advisory_body: AdvisoryBodyModel[];
  public magazine_categories: MagazineCategoryModel[];
  public publication_rules: PublicationRulesModel[];
  public who_is_us: WhoIsUsModel[];
  public magazine_goals: MagazineGoalsModel[];

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {};
  }


}
