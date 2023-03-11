const { getRandomId ,getVillager } = require("../helpers/villagerHelper");
const { generateDialogue } = require("../helpers/dialogueHelper");

const getIndex =  async (req, res) => {
  villager = (await getRandomVillager()).data;
  return res.render('app', {villager, msg: "[Click generate to start]"});
};

const getRandomVillager = (req, res) => {
  const villagerId = getRandomId();

  return res.status(301).redirect(`/villager/${villagerId}`);
};

const getVillagerPage = async (req, res) => {
    const villagerId = req.params.villagerId;
    villager  = (await getVillager(villagerId)).data;
    dialogue = await generateDialogue(villagerId);

    return res.render('villager', {villager, msg: dialogue});
};

const getNotFound = (req, res) => {
  const doc = `page "${req.url}"`;
  return res.render('notFound', { doc });
};

module.exports = {
  getIndex,
  getRandomVillager,
  getVillagerPage,
  getNotFound
};