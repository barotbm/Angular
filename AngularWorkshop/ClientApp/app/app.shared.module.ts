import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { UploaderComponent } from './components/uploader/uploader.component';
import { DataService } from '../../data.service';
@NgModule({
    providers: [DataService],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        UploaderComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },

            { path: 'uploader', component: UploaderComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
