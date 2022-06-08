import { Item } from "./item";

export class Product {
  country: string;
  state: string;
  items:  Item[]
  constructor(
    country: string,
    state: string,
    items:Item[],
  ) {
    this.country = country;
    this.state = state;
    this.items = items;

  }
}
