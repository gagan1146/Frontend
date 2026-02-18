import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { PipePractice } from './pipe-practice/pipe-practice';

export const routes: Routes = [
    {path:"login", component:Login},
    {path:"signup", component:Signup},
    {path:"pipe",component:PipePractice}
];
