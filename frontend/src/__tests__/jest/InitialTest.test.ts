import { AlgoGameApi } from '../../config/app';

describe('InitialTest', () => {
  test('AlgoGameApi is not undefined', () => {
    expect(AlgoGameApi).not.toBeUndefined();
  });
});
