import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { GraphQLModule } from './qraph-ql/qraph-ql.module';
// import { Apollo, ApolloModule } from 'apollo-angular';
// import { appsyncClient } from './app.sync';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    // ApolloModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
