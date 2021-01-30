import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {PhotosService} from '../../../core/services/Section-Module/photos.service';
import {PhotosModel} from '../../../core/models/section-module/photos.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  slug = null;

  model: PhotosModel;
  isLoadingResults: boolean = true;

  constructor(private route: ActivatedRoute,
              private service: PhotosService,
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
    this.route.params.subscribe((resp) => {
      this.slug = resp['slug'];
      // call api to get shipping rule
      this.service.get(this.slug).subscribe(
        (data) => {
          this.model = data;
          this.isLoadingResults = false;
          this.cdr.markForCheck();
        }, error => {
          this.router.navigate(['/'],).then();
        }
      );
    });
  }
}
