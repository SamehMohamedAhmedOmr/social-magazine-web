import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UrlName} from './core/global/url.name';
import {GuestGuard} from './core/guards/guest.guard';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [

  // Home
  {
    path: UrlName.home(),
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },

  // About-us
  {
    path: UrlName.aboutUs(),
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },

  // Contact-us
  {
    path: UrlName.contactUs(),
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },

  // Publication-Rules
  {
    path: UrlName.publicationRules(),
    loadChildren: () => import('./pages/publication-terms/publication-terms.module').then(m => m.PublicationTermsModule)
  },


  {
    path: 'editorial-board',
    loadChildren: () => import('./pages/editorial-board/editorial-board.module').then(m => m.EditorialBoardModule)
  },

  // Advisory-Body
  {
    path: UrlName.advisoryBody(),
    loadChildren: () => import('./pages/advisory-board/advisory-board.module').then(m => m.AdvisoryBoardModule)
  },

  // // Testimonial
  // {
  //   path: UrlName.testimonial(),
  //   loadChildren: () => import('./pages/said-about-us/said-about-us.module').then(m => m.SaidAboutUsModule)
  // },

  // Magazine Category
  {
    path: UrlName.magazineCategory(),
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },

  // Submit Article
  {
    path: UrlName.submitArticle(),
    loadChildren: () => import('./pages/submit-article/submit-article.module').then(m => m.SubmitArticleModule)
  },

  // Archive
  {
    path: UrlName.archive(),
    loadChildren: () => import('./pages/archive/archive.module').then(m => m.ArchiveModule)
  },

  // news
  {
    path: UrlName.news(),
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },

  // article
  {
    path: UrlName.article(),
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule)
  },

  // Login
  {
    path: UrlName.login(),
    canActivate: [GuestGuard],
    loadChildren: () => import('./pages/Auth/login/login.module').then(m => m.LoginModule)
  },

  // register
  {
    path: UrlName.register(),
    canActivate: [GuestGuard],
    loadChildren: () => import('./pages/Auth/registration/registration.module').then(m => m.RegistrationModule)
  },

  // profile
  {
    path: UrlName.profile(),
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },

  // My Article
  {
    path: UrlName.myArticle(),
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/my-article/my-article.module').then(m => m.MyArticleModule)
  },

  { path: '**', redirectTo: UrlName.home(), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
