import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //Con input y output escucho info de fuera.
  @Input() productName: string;
  //Este es el event name:
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.productClicked.emit();
  }

}
