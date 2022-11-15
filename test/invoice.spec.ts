import { Beer } from "../src/beer"
import { Gin } from "../src/gin"
import { Invoice } from "../src/invoice"
import { Item } from "../src/item"
import { Juice } from "../src/juice"
import { Water } from "../src/water"
import { Whisky } from "../src/whisky"

describe('Invoice', () => {
  it('should create an invoice and calculate the taxes', () => {
    const invoice = new Invoice()
    invoice.addItem(new Beer('Heineken 600Mml', 10)) // 10% tax = 1
    invoice.addItem(new Whisky('Jack Daniels 1l', 100)) // 20% tax = 20
    invoice.addItem(new Water('Crystal 500ml', 5)) // 0% tax = 0
    invoice.addItem(new Juice('Laranja 500ml', 10)) // 0% tax = 0
    invoice.addItem(new Gin('Saphire 1l', 200)) // 20% tax = 40

    const taxes = invoice.calculateTaxes()

    expect(taxes).toBe(61)
  })

  it('should create an invoice and calculate the total', () => {
    const invoice = new Invoice()
    invoice.addItem(new Beer('Heineken 600Mml', 10)) // 10% tax = 1
    invoice.addItem(new Whisky('Jack Daniels 1l', 100)) // 20% tax = 20
    invoice.addItem(new Water('Crystal 500ml', 5)) // 0% tax = 0

    const total = invoice.calculateTotal()

    expect(total).toBe(115)
  })
})