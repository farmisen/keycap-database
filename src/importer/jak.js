const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM',
  {
    name: 'Just Another Keymaker',
    instagram: 'https://www.instagram.com/justanotherkeymaker/',
    website: 'https://www.keymaker.space/',
    discord: 'https://discord.com/invite/XMnxAYR',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
