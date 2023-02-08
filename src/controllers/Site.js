const { getRandomVillager } = require("../helpers/villagerHelper");

const getIndex =  async (req, res) => {
  villager = (await getRandomVillager()).data;
  return res.render('app', {villager, msg: "[Click generate to start]"});
}

const getNotFound = (req, res) => {
  const doc = `page "${req.url}"`;
  return res.render('notFound', { doc });
};

module.exports = {
  getIndex,
  getNotFound
};