import {Serializer} from '../../Base/Serializer';
import {BaseSerializer} from '../../Base/Base.serializer';
import {GalleryModel} from '../../../models/Gallery-Module/Gallery/gallery.model';


export class GallerySerializer extends BaseSerializer implements Serializer{

	fromJson(json: any): GalleryModel {
		return this.adapt(json.body)
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: GalleryModel): any {
		return null;
	}

	toFormData(object:any): FormData{
		const formData = new FormData();
		formData.append('image' , object.image );
		formData.append('gallery_type', object.gallery_type);
		return formData;
	}

	public adapt(item: any): GalleryModel {
		return new GalleryModel(
			item.id,
			item.image,

			item.thumbnail,
			null
		);
	}

	status(status): any {

		return {
			is_active: status,
		};
	}

}
