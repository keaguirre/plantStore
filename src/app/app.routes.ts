import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './src/app/components/hero/hero.component';

export const routes: Routes = [
    {
        path: '', component:AppComponent,
        
    },
    {
        path: 'hero', component:HeroComponent,
    },
];
