import { CardNumberType } from './types';

export class CardNumber {
  public constructor(private cardNumber: CardNumberType) {}

  public getNumber() {
    return this.cardNumber;
  }
}
