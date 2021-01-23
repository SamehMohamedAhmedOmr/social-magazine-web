import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlName} from 'src/app/core/global/url.name';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {EventsModel} from '../../../core/models/section-module/events.model';
import {EventsService} from '../../../core/services/Section-Module/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: EventsModel[] = [];
  isLoadingResults: boolean = true;

  constructor(private route: ActivatedRoute,
              private service: EventsService,
              private ngxService: NgxUiLoaderService,
              private authNoticeService: AuthNoticeService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.isLoadingResults = true;
    this.service.list(null).subscribe(
      (data) => {
        this.events = data;
        this.isLoadingResults = false;
        this.cdr.markForCheck();
      }, error => {
        this.router.navigate(['/'],).then();
      }
    );
  }

  detailsUrl(slug) {
    return '/' + UrlName.events() + '/' + slug;
  }

  getContent(text){
    return (text.length > 400) ? text.substring(0, 400) + ' ......' : text;
  }

  checkContentLength(text){
    return (text.length > 400);
  }

}
