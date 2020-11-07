
export class Pagination {

	public current_page: string;
	public first_page_url:string;
	public from:string;
	public last_page:string;
	public last_page_url:string;
	public next_page_url:string;
	public path:string;
	public per_page:string;
	public to:string;
	public total:string;


	constructor(paginationObject:any) {
		this.current_page = paginationObject.current_page;
		this.first_page_url = paginationObject.first_page_url;
		this.from = paginationObject.from;
		this.last_page = paginationObject.last_page;
		this.last_page_url = paginationObject.last_page_url;
		this.next_page_url = paginationObject.next_page_url;
		this.path = paginationObject.path;
		this.per_page = paginationObject.per_page;
		this.to = paginationObject.to;
		this.total = paginationObject.total;
	}

	public list() {
		return {
			'current_page': this.current_page,
			'first_page_url': this.first_page_url,
			'from': this.from,
			'last_page': this.last_page,
			'last_page_url': this.last_page_url,
			'path': this.path,
			'per_page': this.per_page,
			'to': this.to,
			'total': this.total,
		}
	}
}
