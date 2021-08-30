import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NewsArticleRoutingModule } from './news-article/news-article-routing.module';
import { NewsArticleModule } from './news-article/news-article.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/cards';
// , MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UserRoutingModule,
    NewsArticleModule,
    NewsArticleRoutingModule,
    HeaderModule,
    // MatButtonModule,
    // MatMenuModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
