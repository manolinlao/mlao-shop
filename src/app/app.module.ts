import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { MlaoAttrDirective } from './directives/attr.directive';
import { MlaoAttrDynamicDirective } from './directives/attr-dynamic.directive';
import { TwowayDirective } from './directives/twoway.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MlaoAttrDirective,
    MlaoAttrDynamicDirective,
    TwowayDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
