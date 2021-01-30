import {ModelBase} from '../Base/base.model';
import {ArticleTypeModel} from '../pre-article-module/article.type.model';
import {ArticleAuthorsModel} from './article.authors.model';
import {ArticleAttachmentsModel} from './article.attachments.model';
import {ArticleSuggestedJudgesModel} from './article.suggested.judges.model';

export class ArticleModel extends ModelBase {

	public slug:string;
  public code:string;
  public title_ar:string;
  public title_en:string;
  public content_ar:string;
  public content_en:string;
  public keywords_en: string[];
  public keywords_ar: string[];
  public article_type:ArticleTypeModel;
  public main_author:ArticleAuthorsModel;
  public authors:ArticleAuthorsModel[];
  public attachments:ArticleAttachmentsModel[];
  public suggested_judges:ArticleSuggestedJudgesModel[];
  public last_status:{
    status:{
      id:number,
      name:string,
      key:string,
      description:string,
    }
  };


	constructor(id: number) {
		super(id);
		this.article_type = new ArticleTypeModel(null);
    this.main_author = new ArticleAuthorsModel(null);
  }

	public list() {
		return {
      'id' : this.id,

      'slug' : this.slug,
      'code' : this.code,
      'title_ar' : this.title_ar,
      'title_en' : this.title_en,
      'content_ar' : this.content_ar,
      'content_en' : this.content_en,

      'current_article' : this,

      'article_type' : this.article_type,
      'last_status' : this.last_status?.status?.name,
      'last_status_key' : this.last_status?.status?.key
    };
	}


}
