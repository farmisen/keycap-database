const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('11EAZ-nVLgIKuRXEXQDQ1SJotvq871jPLMo9HlS3eAZg', {
  name: 'Binirias',
  instagram: 'https://www.instagram.com/binirias/',
  discord: 'https://discord.com/invite/QbWBydq3k2',
});

launcher(scrap);

module.exports = {
  scrap,
};
