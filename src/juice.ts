import { Item } from "./item"

export class Juice extends Item {
  constructor (description: string, price: number) {
    super("Juice", description, price)
  }
}