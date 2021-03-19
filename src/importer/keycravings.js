const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o',
  {
    name: 'KeyCravings',
    instagram: 'https://www.instagram.com/keycravings/',
    website: 'https://keycravings.com',
    discord: 'https://discord.com/invite/GJdKu6r',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
