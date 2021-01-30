import {ModelBase} from '../Base/base.model';
import {CountryModel} from './country.model';
import {EducationalDegreeModel} from './educational.degree.model';
import {EducationalLevelModel} from './educational.level.model';
import {GenderModel} from './gender.model';
import {TitleModel} from './title.model';

export class AccountDependenciesModel extends ModelBase {

	public country:CountryModel[] = [];
  public degrees:EducationalDegreeModel[] = [];
  public levels:EducationalLevelModel[] = [];
  public genders:GenderModel[] = [];
  public titles:TitleModel[] = [];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
		};
	}


}
