import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UrlName} from 'src/app/core/global/url.name';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {VideosModel} from '../../../core/models/section-module/videos.model';
import {VideosService} from '../../../core/services/Section-Module/videos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  videos: VideosModel[] = [];
  isLoadingResults: boolean = true;

  constructor(private route: ActivatedRoute,
              private service: VideosService,
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
        this.videos = data;
        this.isLoadingResults = false;
        this.cdr.markForCheck();
      }, error => {
        this.router.navigate(['/'],).then();
      }
    );
  }

  detailsUrl(slug) {
    return '/' + UrlName.videos() + '/' + slug;
  }
}
