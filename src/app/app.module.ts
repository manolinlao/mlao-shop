import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ModelModule } from './model/model.module';
import { MessagesModule } from './messages/messages.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModelModule, MessagesModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
