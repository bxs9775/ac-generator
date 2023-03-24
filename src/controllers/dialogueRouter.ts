import express from "express";
import VillagerHelper from "../helpers/villagerHelper";
import TraceryBuilder from "../classes/Builders/TraceryBuilder";

export const dialogueRouter = express.Router();

dialogueRouter.get('/dialogue',async (req,res) => {
  var id : number = (req.query.villagerId)?parseInt(req.query.villagerId as string):VillagerHelper.getRandomId();
  var playerName: string = (req.query.playerName)?req.query.playerName as string:"Player";
  var villager = await VillagerHelper.getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  var options = new TraceryBuilder({ playerName: [playerName] });
  var dialogue = villager.generate(options);
  return res.status(200).json({
    "villager": villager.toJson(),
    "dialogue": dialogue
  })
});

dialogueRouter.get('/rules', async (req,res) => {
  var id : number = (req.query.villagerId)?parseInt(req.query.villagerId as string):VillagerHelper.getRandomId();
  var villager = await VillagerHelper.getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  return res.status(200).json({
    raw: villager.generator.builder.data,
    grammer: villager.generator.builder.build()
  });
});