import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/component/login.component';
import { RegistrationComponent } from './registration/component/registration.component';
import { FeedComponent } from './feed/component/feed.component';

const routes: Routes = [

  {  path: 'login', component:LoginComponent},
    {  path: 'registration', component:RegistrationComponent},
    {  path: 'feed', component:FeedComponent},
    
    {  path: '',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
