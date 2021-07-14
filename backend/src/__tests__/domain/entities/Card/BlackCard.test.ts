import { BlackCard } from '../../../../domain/entities/Card/BlackCard';
import { CardNumber } from '../../../../domain/valueObjects/Card/CardNumber';

describe('BlackCard', () => {
  describe('getCardNumber', () => {
    test('インスタンス化した時の数字を取得できる', () => {
      const num = 10;
      const cardNumber = new CardNumber(num);
      const blackCard = new BlackCard(cardNumber);

      expect(blackCard.getCardNumber()).toBe(num);
    });
  });

  describe('isBigger', () => {
    test('isBiggerをつかうオブジェクトよりも引数に渡したCardの方が数字が小さい時、trueが返る', () => {
      const smallCardNumber = new CardNumber(0);
      const bigCardNumber = new CardNumber(11);

      const smallBlackCard = new BlackCard(smallCardNumber);
      const bigBlackCard = new BlackCard(bigCardNumber);

      expect(bigBlackCard.isBigger(smallBlackCard)).toBeTruthy();
    });
  });
});
