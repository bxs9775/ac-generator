const { getRandomId ,getVillager } = require("../helpers/villagerHelper");
const TraceryBuilder = require("../classes/TraceryBuilder/TraceryBuilder");

const getDialogue = async (req,res) => {
  id = (req.query.villagerId)?req.query.villagerId:getRandomId();
  playerName = (req.query.playerName)?req.query.playerName:"Player";
  villager = await getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  options = { "player-name": playerName };
  dialogue = villager.generate(options);
  return res.status(200).json({
    "villager": villager.toJson(),
    "dialogue": dialogue
  })
}

const getRules = async (req,res) => {
  id = (req.query.villagerId)?req.query.villagerId:getRandomId();
  villager = await getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  return res.status(200).json(villager.generator.rawGrammer);
}

const postGrammer = async (req,res) => {
  if(!req.body.type ){
    return res.status(400).json({ 
      "msg": "Request body is missing a 'type' property"
    });
  }
  if(!req.body.data ){
    return res.status(400).json({ 
      "msg": "Request body is missing a 'data' property"
    });
  }
  builder = new TraceryBuilder(req.body.data,req.body.type);
  return res.status(200).json(builder.build());
};

module.exports = {
  getDialogue,
  getRules,
  postGrammer
};