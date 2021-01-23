import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {VideosService} from '../../../core/services/Section-Module/videos.service';
import {VideosModel} from '../../../core/models/section-module/videos.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  slug = null;

  model:VideosModel;

  constructor(private route: ActivatedRoute,
              private service:VideosService,
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
    this.route.params.subscribe((resp) => {
      this.slug = resp['slug'];
      // call api to get shipping rule
      this.service.get(this.slug).subscribe(
        (data) => {
          this.model = data;
          this.ngxService.stop();
        } , error => {
          // this.router.navigate(['/'],).then();
        }
      )
    });
  }
}
