import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { PipePractice } from './pipe-practice/pipe-practice';
import { Signals } from './signals/signals';

export const routes: Routes = [
    {path:"login", component:Login},
    {path:"signup", component:Signup},
    // {path:"pipe",component:PipePractice},
    {path:"signals",component:Signals}
];
