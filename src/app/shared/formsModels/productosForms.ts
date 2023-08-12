import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ProductosForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      precio: [0, [Validators.required]],
      stock: [0, [Validators.required]],
      fechaIngreso: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      estado: [true],
      categoria: [1, [Validators.required]],
    });
  }
}
