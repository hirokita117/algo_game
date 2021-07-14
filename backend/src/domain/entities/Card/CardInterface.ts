export interface CardInterface {
  getCardNumber(): number;
  isBigger(card: CardInterface): boolean;
}
