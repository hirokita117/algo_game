import { Selector } from 'testcafe';

import { fixture } from '../../../testcafe-defs';

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

test('My first test', async (t) => {
  const siteLogo = await Selector('h1');
  await t.expect(siteLogo.innerText).eql('Example');
});
