import { Order } from '../src/order'

describe('Order', () => {
  let sut: Order

  beforeEach(() => {
    sut = new Order()
  })

  it('should not create an order with an invalid cpf', () => {
    const invalidCpf = '11111111111'
    const order = {
      customer: { cpf: invalidCpf },
      items: []
    }

    expect(() => sut.create(order)).toThrow(new Error('invalid cpf'))
  })
})