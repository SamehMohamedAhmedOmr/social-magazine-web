import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "about-us",
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: "contact-us",
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: "publication-terms",
    loadChildren: () => import('./publication-terms/publication-terms.module').then(m => m.PublicationTermsModule)
  },
  {
    path: "editorial-board",
    loadChildren: () => import('./editorial-board/editorial-board.module').then(m => m.EditorialBoardModule)
  },
  {
    path: "advisory-board",
    loadChildren: () => import('./advisory-board/advisory-board.module').then(m => m.AdvisoryBoardModule)
  },
  {
    path: "what-we-are",
    loadChildren: () => import('./said-about-us/said-about-us.module').then(m => m.SaidAboutUsModule)
  },
  {
    path: "category",
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: "submit-article",
    loadChildren: () => import('./submit-article/submit-article.module').then(m => m.SubmitArticleModule)
  },
  {
    path: "archive",
    loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule)
  },
  {
    path: "latest-news",
    loadChildren: () => import('./latest-news/latest-news.module').then(m => m.LatestNewsModule)
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
