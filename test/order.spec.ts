import { Order } from '../src/order'

describe('Order', () => {
  it('should not create an order with an invalid cpf', () => {
    const invalidCpf = '11111111111'
    const order = {
      customer: { cpf: invalidCpf },
      items: []
    }

    expect(() => Order.create(order)).toThrow(new Error('invalid cpf'))
  })

  it('should create an order with 3 items', () => {
    const cpf = '259.023.510-06'
    const customer = { cpf }
    const items = [
      { description: 'item_1', price: 10, quantity: 3 },
      { description: 'item_2', price: 15, quantity: 1 },
      { description: 'item_3', price: 30, quantity: 5 },
    ]
    const order = {
      customer,
      items
    }

    const createdOrder = Order.create(order)

    expect(createdOrder.items).toEqual(items)
    expect(createdOrder.customer).toEqual(customer)
  })
})