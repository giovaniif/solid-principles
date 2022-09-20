import { Cpf } from "../src/cpf";
import { Coupon } from "./coupon";
import { Item } from "./item";
import { OrderItem } from "./order-item";

export class Order {
  cpf: Cpf 
  orderItems: OrderItem[]
  coupon?: Coupon
  
  constructor (cpf: string) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  addItem (orderItem: Item, quantity: number) {
    this.orderItems.push(new OrderItem(orderItem.idItem, orderItem.price, quantity))
  }

  addCoupon (coupon: Coupon) {
    this.coupon = coupon
  }

  getTotal () {
    let total = this.orderItems.reduce((total, orderItem) => {
      total += orderItem.getTotal()
      return total
    }, 0)
    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total)
    }
    return total
  }

}