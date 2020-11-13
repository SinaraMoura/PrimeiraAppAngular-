import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()


  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(iten: CartItem){
    this.increaseQty.emit(iten)
  }

  emitDecreaseQty(iten: CartItem){
    this.decreaseQty.emit(iten)
  }

  emitRemove(iten: CartItem){
    this.remove.emit(iten)
  }

}
