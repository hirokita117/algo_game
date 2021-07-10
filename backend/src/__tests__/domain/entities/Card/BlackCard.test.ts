import { BlackCard } from '../../../../domain/entities/Card/BlackCard';

describe('BlackCard', () => {
  describe('getCardNumber', () => {
    test('インスタンス化した時の数字を取得できる', () => {
      const cardNumber = 10;
      const blackCard = new BlackCard(cardNumber);
      expect(blackCard.getCardNumber()).toBe(cardNumber);
    });
  });
});
