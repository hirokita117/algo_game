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
});
