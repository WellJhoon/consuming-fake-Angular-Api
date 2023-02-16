import { Component, OnInit , Input} from '@angular/core';
import {product} from 'C:/Users/jhon-/OneDrive/Documentos/vscode/Angular/Learn MIdu/WellJhon-app/src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: product = {
    id: 0,
    title: '',
    price: 0,
    images: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
