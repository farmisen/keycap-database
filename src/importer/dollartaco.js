const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs', {
  name: 'Dollartacos',
  instagram: 'https://www.instagram.com/dollarta.co/',
  website: 'https://www.dollarta.co',
  discord: 'https://discord.com/invite/sCEE3Ce',
});

launcher(scrap);

module.exports = {
  scrap,
};
