import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PostsListComponent } from './component/posts-list/posts-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './component/weather/weather.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostsListComponent,
    PageNotFoundComponent,
    PostItemComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
