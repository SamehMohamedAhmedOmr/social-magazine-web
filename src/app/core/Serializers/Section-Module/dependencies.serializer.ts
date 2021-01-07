import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {DependenciesModel} from '../../models/section-module/dependencies.model';

export class DependenciesSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): DependenciesModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: DependenciesModel): any {
    return {};
  }

  toFormData(object: DependenciesModel): FormData {
    return null;
  }

  public adapt(item: any): DependenciesModel {
    let object = new DependenciesModel(null);

    object.advisory_body = item.advisory_body;
    object.magazine_categories = item.magazine_categories;
    object.publication_rules = item.publication_rules;
    object.who_is_us = item.who_is_us;
    object.magazine_goals = item.magazine_goals;

    return object;
  }


  status(status): any {
    return {};
  }

}
