import {ModelBase} from '../../Base/base.model';

export class GalleryModel extends ModelBase {
	public image: string;
	public thumbnail: string;
	public gallery_type:string;

	constructor(id: number, image: string, thumbnail: string, gallery_type:string) {
		super(id);
		this.image = image;
		this.thumbnail = thumbnail;
		this.gallery_type = gallery_type;
	}

	public list() {
		return {
			'id': this.id,
			'image': this.image,
			'thumbnail': this.thumbnail,
			'gallery_type' : this.gallery_type
		};
	}
}
