const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('14jF0ewtoj5S2GPXkGrfppH3zu0Dd2Y8aZnJ_nP1kPuw', {
  name: 'Slime Scholar',
  instagram: 'https://www.instagram.com/slimescholarcaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
