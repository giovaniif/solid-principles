import { Item } from "./item";

export class OrderItem {
  constructor (readonly itemId: number, readonly price: number, readonly quantity: number) {}

  getTotal () {
    return this.price * this.quantity
  }
}