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
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  product: Product = new Product();
  editing: boolean = false;

  // Para el formulario reactivo
  nameField: FormControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[A-Za-z ]+$'),
    ],
    updateOn: 'change',
  });
  categoryField: FormControl = new FormControl();

  productForm: FormGroup = new FormGroup({
    name: this.nameField,
    category: this.categoryField,
  });

  constructor(
    private model: Model,
    private state: SharedStateService,
    private messageService: MessageService
  ) {
    this.state.changes.subscribe((upd) => this.handleStateChange(upd));
    this.messageService.reportMessage(new Message('Creating new product'));
  }

  ngOnInit() {
    // escucha el statusChanges del productForm que es un FormGroup
    this.productForm.statusChanges.subscribe((newStatus) => {
      if (newStatus == 'INVALID') {
        let invalidControls: string[] = [];
        for (let controlName in this.productForm.controls) {
          if (this.productForm.controls[controlName].invalid) {
            invalidControls.push(controlName);
          }
        }
        this.messageService.reportMessage(
          new Message(`INVALID: ${invalidControls.join(',')}`)
        );
      } else {
        this.messageService.reportMessage(new Message(newStatus));
      }
    });

    // escucha al statusChanges del nameField
    /*
    this.nameField.statusChanges.subscribe((newStatus) => {
      if (newStatus == 'INVALID' && this.nameField.errors != null) {
        let errs = Object.keys(this.nameField.errors).join(', ');
        this.messageService.reportMessage(new Message(`INVALID: ${errs} `));
      } else {
        this.messageService.reportMessage(new Message(newStatus));
      }
    });
    */
    /*
    // escucha los cambios del nameField
    this.nameField.valueChanges.subscribe((newValue) => {
      this.messageService.reportMessage(new Message(newValue || '(Empty)'));
      if (typeof newValue == 'string' && newValue.length % 2 == 0) {
        this.nameField.markAsPristine();
      }
    });
    */
  }

  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode == MODES.EDIT;
    if (this.editing && newState.id) {
      this.product = { ...this.model.getProduct(newState.id) } ?? new Product();
      this.messageService.reportMessage(
        new Message(`editing ${this.product.name}`)
      );
      //this.nameField.setValue(this.product.name);
    } else {
      this.product = new Product();
      this.messageService.reportMessage(new Message('creating new product'));
      //this.nameField.setValue('');
    }
    this.productForm.reset(this.product);
  }
}
