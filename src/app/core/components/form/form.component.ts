import { Component } from '@angular/core';
import { Model } from '../../../model/repository.model';
import {
  MODES,
  SharedStateService,
  StateUpdate,
} from '../../services/sharedState.service';
import { MessageService } from '../../../messages/message.service';
import { Message } from 'src/app/messages/message.model';
import { Product } from '../../../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  product: Product = new Product();
  editing: boolean = false;

  constructor(
    private model: Model,
    private state: SharedStateService,
    private messageService: MessageService
  ) {
    this.state.changes.subscribe((upd) => this.handleStateChange(upd));
    this.messageService.reportMessage(new Message('Creating new product'));
  }

  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode == MODES.EDIT;
    if (this.editing && newState.id) {
      this.product = { ...this.model.getProduct(newState.id) };
      this.messageService.reportMessage(
        new Message(`editing ${this.product.name}`)
      );
    } else {
      this.product = new Product();
      this.messageService.reportMessage(new Message('creating new product'));
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.resetForm();
    }
  }
}
