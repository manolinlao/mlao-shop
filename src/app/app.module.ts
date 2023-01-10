import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MlaoAttrDirective } from './directives/attr.directive';
import { MlaoAttrDynamicDirective } from './directives/attr-dynamic.directive';
import { TwowayDirective } from './directives/twoway.directive';
import { StructureDirective } from './directives-structure/structure.directive';
import { IteratorDirective } from './directives-structure/iterator.directive';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import { MlaoAddTaxPipe } from './pipes/mlao-add-tax.pipe';
import { MlaoCategoryFilterPipe } from './pipes/mlao-category-filter.pipe';
import { DiscountService } from './services/discount.service';
import { DiscountDisplayComponent } from './components/discount-display/discount-display.component';
import { DiscountEditorComponent } from './components/discount-editor/discount-editor.component';
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MlaoAttrDirective,
    MlaoAttrDynamicDirective,
    TwowayDirective,
    StructureDirective,
    IteratorDirective,
    PrincipalComponent,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    MlaoAddTaxPipe,
    MlaoCategoryFilterPipe,
    DiscountDisplayComponent,
    DiscountEditorComponent,
    DiscountPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DiscountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
