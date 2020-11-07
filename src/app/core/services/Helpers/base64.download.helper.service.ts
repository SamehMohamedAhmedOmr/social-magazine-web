import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class Base64DownloadHelperService {


	public static downloadBase64File(contentType, base64Data, fileName) {
		const linkSource = `data:${contentType};base64,${base64Data}`;
		console.log(linkSource);
		const downloadLink = document.createElement("a");
		downloadLink.href = linkSource;
		downloadLink.download = fileName;
		downloadLink.click();
	}

	public static downloadFile(path, fileName) {
		const downloadLink = document.createElement("a");
		downloadLink.href = path;
		downloadLink.download = fileName;
		return downloadLink.click();
	}
}
