import { Selector } from 'testcafe';

import { fixture } from '../../../testcafe-defs';

fixture`Getting Started`.page`http://localhost:3000`; // TODO localhost以外でもテストできるようにする

test('My first test', async (t) => {
  const siteLogo = await Selector('h1');
  await t.expect(siteLogo.innerText).eql('Welcome!!');
});
