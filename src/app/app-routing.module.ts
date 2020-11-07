import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesName} from './core/global/routes.name';

const routes: Routes = [
  {
    path: RoutesName.home(),
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutesName.whoIsUs(),
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: RoutesName.contactUs(),
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: RoutesName.publicationRules(),
    loadChildren: () => import('./pages/publication-terms/publication-terms.module').then(m => m.PublicationTermsModule)
  },
  {
    path: 'editorial-board',
    loadChildren: () => import('./pages/editorial-board/editorial-board.module').then(m => m.EditorialBoardModule)
  },
  {
    path: RoutesName.advisoryBody(),
    loadChildren: () => import('./pages/advisory-board/advisory-board.module').then(m => m.AdvisoryBoardModule)
  },
  {
    path: RoutesName.testimonial(),
    loadChildren: () => import('./pages/said-about-us/said-about-us.module').then(m => m.SaidAboutUsModule)
  },
  {
    path: RoutesName.magazineCategory(),
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: RoutesName.submitArticle(),
    loadChildren: () => import('./pages/submit-article/submit-article.module').then(m => m.SubmitArticleModule)
  },
  {
    path: RoutesName.archive(),
    loadChildren: () => import('./pages/archive/archive.module').then(m => m.ArchiveModule)
  },
  {
    path: RoutesName.latestNews(),
    loadChildren: () => import('./pages/latest-news/latest-news.module').then(m => m.LatestNewsModule)
  },
  {
    path: RoutesName.login(),
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: RoutesName.register(),
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  { path: '**', redirectTo: RoutesName.home(), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
