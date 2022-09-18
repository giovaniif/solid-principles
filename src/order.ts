import { validate } from './cpf-validator'

type Item = { price: number, quantity: number, description: string }

type CreateOrder = {
  customer: { cpf: string },
  items: Item[] 
  discountCoupon?: string
}

type MyOrder = {
  customer: { cpf: string },
  items: Item[] 
  price: number 
}

export class Order {
  public readonly items: Item[]
  public readonly customer: { cpf: string }
  public readonly price: number

  private constructor (order: MyOrder) {
    this.items = order.items
    this.customer = order.customer
    this.price = order.price
    Object.freeze(this)
  }


  static create ({ customer, items, discountCoupon }: CreateOrder): Order {
    if (!validate(customer.cpf)) {
      throw new Error('invalid cpf')
    }
    const itemsPriceWithoutDiscount = items.reduce((price, item) => {
      const itemPrice = item.quantity * item.price
      price += itemPrice
      return price
    }, 0)
    if (discountCoupon) {
      const discountPercentage = Order.getCouponDiscountPercentage(discountCoupon)
      const discount = (itemsPriceWithoutDiscount * discountPercentage) / 100
      const priceWithDiscount = itemsPriceWithoutDiscount - discount
      return new Order({ customer, items, price: priceWithDiscount })
    }
    return new Order({ customer, items, price: itemsPriceWithoutDiscount })
  }

  private static getCouponDiscountPercentage (discountCoupon: string): number {
    return 10
  }
}