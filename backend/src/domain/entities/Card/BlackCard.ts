import { CardInterface } from './CardInterface';

export class BlackCard implements CardInterface {
  public constructor(private cardNumber: number) {}

  public getCardNumber() {
    return this.cardNumber;
  }
}
