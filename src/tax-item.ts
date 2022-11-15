import { Item } from "./item";

export abstract class TaxItem extends Item {
  calculateTax (): number {
    return this.price * this.getTax()
  }

  abstract getTax (): number
}