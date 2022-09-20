import { Coupon } from '../src/coupon'
import { Item } from '../src/item'
import { Order } from '../src/order'

describe('Order', () => {
  it('should not create an order with an invalid cpf', () => {
    expect(() => new Order('11111111111')).toThrow(new Error("invalid cpf"))
  })

  it('should create an order without items', () => {
    const order = new Order('111.444.777-35')
    
    expect(order.getTotal()).toBe(0)
  })

  it('should create an order with 3 items', () => {
    const order = new Order('111.444.777-35')
    order.addItem(new Item(1, "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Cabo", 30), 3)
    
    expect(order.getTotal()).toBe(6090)
  })

  it('should create an order with 3 items with discount coupon', () => {
    const order = new Order('111.444.777-35')
    order.addItem(new Item(1, "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Cabo", 30), 3)
    order.addCoupon(new Coupon("VALE20", 20))
    
    expect(order.getTotal()).toBe(4872)
  })
})