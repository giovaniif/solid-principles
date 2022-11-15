import { TaxItem } from "./tax-item"

export class Gin extends TaxItem {
  constructor (description: string, price: number) {
    super("Gin", description, price)
  }

  calculateTax(): number {
    return this.price * 0.2
  }
}