import { Item } from "./item";

export abstract class TaxItem extends Item {
  abstract calculateTax (): number
}