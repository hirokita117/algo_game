import { CardNumber } from '../../valueObjects/Card/CardNumber';

import { CardInterface } from './CardInterface';

export class BlackCard implements CardInterface {
  public constructor(private cardNumber: CardNumber) {}

  public getCardNumber() {
    return this.cardNumber.getNumber();
  }

  public isBigger(card: CardInterface) {
    return this.getCardNumber() > card.getCardNumber();
  }
}
