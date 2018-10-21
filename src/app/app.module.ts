import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { HouseDetailComponent } from './detail/house-detail/house-detail.component';
import { BookDetailComponent } from './detail/book-detail/book-detail.component';
import { CharacterDetailComponent } from './detail/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'HomeComponent',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CardComponent,
    HouseDetailComponent,
    BookDetailComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
