type Item = {}

type CreateOrder = {
  customer: { cpf: string },
  items: Item[] 
}

export class Order {
  create (order: CreateOrder) {
    throw new Error('invalid cpf')
  }
}