import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "post",
    pathMatch: "full",
  },
  {
    path: "post",
    loadChildren: () =>
      import("./post/post.module").then((m) => m.PostPageModule),
  },
  {
    path: 'post-form',
    loadChildren: () => import('./post-form/post-form.module').then( m => m.PostFormPageModule)
  },
  {
    path: "post/edit/:postId",
    loadChildren: () =>
      import("./post-form/post-form.module").then((m) => m.PostFormPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
