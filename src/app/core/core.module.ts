import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedStateService } from './services/sharedState.service';
import { ModelModule } from '../model/model.module';
import { ValidationHelperPipe } from './pipes/validation-helper.pipe';

@NgModule({
  declarations: [TableComponent, FormComponent, ValidationHelperPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModelModule],
  exports: [TableComponent, FormComponent],
  providers: [SharedStateService],
})
export class CoreModule {}
