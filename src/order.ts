import { validate } from './cpf-validator'

type Item = { price: number, quantity: number, description: string }

type CreateOrder = {
  customer: { cpf: string },
  items: Item[] 
}

export class Order {
  public readonly items: Item[]
  public readonly customer: { cpf: string }

  private constructor (order: CreateOrder) {
    this.items = order.items
    this.customer = order.customer
    Object.freeze(this)
  }


  static create (order: CreateOrder): Order {
    if (!validate(order.customer.cpf)) {
      throw new Error('invalid cpf')
    }
    return new Order(order)
  }
}