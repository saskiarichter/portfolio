import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

export const routes: Routes = [
    { path: '', component: MaincontentComponent},
    { path: 'legalnotice', component: LegalnoticeComponent},
];
