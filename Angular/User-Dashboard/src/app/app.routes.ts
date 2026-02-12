import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:"#",component:Home},
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"signup",component:Signup},
    {path:"profile/:id/:name",component:Profile},
    {path:"profile",component:Profile},
    {path:"**",component:PageNotFound}
];
