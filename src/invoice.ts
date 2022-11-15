import { Item } from "./item"
import { TaxItem } from "./tax-item"

export class Invoice {
  items: Item[]

  constructor () {
    this.items = []
  }

  addItem (item: Item) {
    this.items.push(item)
  } 
  
  calculateTaxes () {
    let taxes = 0 
    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTax()
      }
    }
    return taxes
  }

  calculateTotal () {
    return this.items.reduce((_total, item) => {
      const total = _total + item.price
      return total
    }, 0)
  }
}