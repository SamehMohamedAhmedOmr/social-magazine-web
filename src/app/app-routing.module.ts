import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesName} from '../core/global/routes.name';

const routes: Routes = [
  {
    path: RoutesName.home(),
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutesName.whoIsUs(),
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: RoutesName.contactUs(),
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: RoutesName.publicationRules(),
    loadChildren: () => import('./publication-terms/publication-terms.module').then(m => m.PublicationTermsModule)
  },
  {
    path: 'editorial-board',
    loadChildren: () => import('./editorial-board/editorial-board.module').then(m => m.EditorialBoardModule)
  },
  {
    path: RoutesName.advisoryBody(),
    loadChildren: () => import('./advisory-board/advisory-board.module').then(m => m.AdvisoryBoardModule)
  },
  {
    path: RoutesName.testimonial(),
    loadChildren: () => import('./said-about-us/said-about-us.module').then(m => m.SaidAboutUsModule)
  },
  {
    path: RoutesName.magazineCategory(),
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: RoutesName.submitArticle(),
    loadChildren: () => import('./submit-article/submit-article.module').then(m => m.SubmitArticleModule)
  },
  {
    path: RoutesName.archive(),
    loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule)
  },
  {
    path: RoutesName.latestNews(),
    loadChildren: () => import('./latest-news/latest-news.module').then(m => m.LatestNewsModule)
  },
  {
    path: RoutesName.login(),
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: RoutesName.register(),
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  { path: '**', redirectTo: RoutesName.home(), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
