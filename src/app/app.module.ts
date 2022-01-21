
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './features/features.routes';

@NgModule({
  declarations: [AppComponent],
  imports:      [BrowserModule,RouterModule.forRoot(routes)],
  exports:      [],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { }
