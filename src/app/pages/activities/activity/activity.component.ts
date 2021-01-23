import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { UrlName } from 'src/app/core/global/url.name';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {ActivityModel} from '../../../core/models/section-module/activity.model';
import {ActivitiesService} from '../../../core/services/Section-Module/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities:ActivityModel[] = [];

  constructor(private route: ActivatedRoute,
              private service:ActivitiesService,
              private ngxService: NgxUiLoaderService,
              private authNoticeService: AuthNoticeService,
              private router:Router,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.ngxService.start();
    this.service.list(null).subscribe(
      (data) => {
        this.activities = data;
        this.ngxService.stop();
      } , error => {
        console.log(error);
        // this.router.navigate(['/'],).then();
      }
    );
  }

  detailsUrl(slug){
    return  '/' + UrlName.activities() + '/' + slug;
  }
}
