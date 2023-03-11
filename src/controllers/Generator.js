const { getRandomId ,getVillager } = require("../helpers/villagerHelper");
const { generateDialogue } = require("../helpers/dialogueHelper");

const getDialogue = async (req,res) => {
  id = (req.query.villagerId)?req.query.villagerId:getRandomId();
  villager = await getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  dialogue = generateDialogue(villager);
  return res.status(200).json({
    "villager": {
      "name": villager.name["name-USen"],
      "personality": villager.personality,
      "species": villager.species,
      "gender": villager.gender,
      "catch-phrase": villager["catch-phrase"],
      "icon_uri": villager.icon_uri
    },
    dialogue
  })
}

module.exports = {
  getDialogue
};