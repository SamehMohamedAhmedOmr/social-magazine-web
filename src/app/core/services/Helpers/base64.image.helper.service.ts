import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class Base64ImageHelperService {

	public getBase64ImageFromURL(url: string): Observable<string> {
		return Observable.create((observer: Observer<string>) => {
			// create an image object
			let img = new Image();
			img.crossOrigin = "Anonymous";
			img.src = url;
			if (!img.complete) {
				// This will call another method that will create image from url
				img.onload = () => {
					observer.next(this.getBase64Image(img));
					observer.complete();
				};
				img.onerror = err => {
					observer.error(err);
				};
			} else {
				observer.next(this.getBase64Image(img));
				observer.complete();
			}
		});
	}

	/* Method to create base64Data Url from fetched image */
	getBase64Image(img: HTMLImageElement): string {
		// We create a HTML canvas object that will create a 2d image
		var canvas: HTMLCanvasElement = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
		// This will draw image
		ctx.drawImage(img, 0, 0);
		// Convert the drawn image to Data URL
		let dataURL: string = canvas.toDataURL("image/png");
		//this.base64DefaultURL = dataURL;
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

}
