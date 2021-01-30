import { MatPaginatorIntl } from '@angular/material/paginator';

const RangeLabel = (page: number, pageSize: number, length: number) => {
	let from = localStorage.getItem('cms_lang') == 'en' ? 'from' : 'من';

	if (length == 0 || pageSize == 0) { return `0 ${from} ${length}`; }

	length = Math.max(length, 0);

	const startIndex = page * pageSize;

	// If the start index exceeds the list length, do not try and fix the end index to the end.
	const endIndex = startIndex < length ?
		Math.min(startIndex + pageSize, length) :
		startIndex + pageSize;

	return `${startIndex + 1} - ${endIndex} ${from} ${length}`;
};


export function getPaginatorIntl() {
	const paginatorIntl = new MatPaginatorIntl();
	let lang = localStorage.getItem('cms_lang');
	let itemsPerPageLabel = 'عدد العناصر في الصفحة : ';
	let nextPageLabel = 'الصفحة التالية';
	let previousPageLabel = 'الصفحة السابقة';

	if (lang == 'en'){
		itemsPerPageLabel = 'Items per page : ';
		nextPageLabel = 'Next Page';
		previousPageLabel = 'Previous Page';
	}

	paginatorIntl.itemsPerPageLabel = itemsPerPageLabel;
	paginatorIntl.nextPageLabel = nextPageLabel;
	paginatorIntl.previousPageLabel = previousPageLabel;
	paginatorIntl.getRangeLabel = RangeLabel;

	return paginatorIntl;
}
