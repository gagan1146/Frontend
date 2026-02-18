import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { DeviceCreationPage } from './device-creation-page/device-creation-page';
import { DeviceSummaryPage } from './device-summary-page/device-summary-page';
import { ShelfCreationPage } from './shelf-creation-page/shelf-creation-page';
import { ShelfSummaryPage } from './shelf-summary-page/shelf-summary-page';
import { PageNotFoundPage } from './page-not-found-page/page-not-found-page';

export const routes: Routes = [
    {path:'home',component:LandingPage},
    {path:'device/creation',component:DeviceCreationPage},
    {path:'device/summary',component:DeviceSummaryPage},
    {path:'shelf/creation',component:ShelfCreationPage},
    {path:'shelf/summary',component:ShelfSummaryPage},
    {path:'**',component:PageNotFoundPage}
];
