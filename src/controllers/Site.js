const { getRandomVillager } = require("../helpers/villagerHelper");

const getIndex =  async (req, res) => {
  villager = (await getRandomVillager()).data;
  res.render('app', {villager});
}

const getNotFound = (req, res) => {
  const doc = `page "${req.url}"`;
  return res.render('notFound', { doc });
};

module.exports = {
  getIndex,
  getNotFound
};