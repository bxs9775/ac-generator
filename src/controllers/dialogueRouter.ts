import express from "express";
import VillagerHelper from "../helpers/acnhapiHelper";
import GrammerBuilder from "../classes/Builders/GrammerBuilder";
import Generator from "../classes/Generator";

export const dialogueRouter = express.Router();

dialogueRouter.get('/dialogue',async (req,res) => {
  var id : number = (req.query.villagerId)?parseInt(req.query.villagerId as string):VillagerHelper.getRandomId();
  var playerName: string = (req.query.playerName)?req.query.playerName as string:"Player";
  var town: string = (req.query.town)?req.query.town as string:"Town";
  var villager = await VillagerHelper.getVillager(id);
  if(!villager){
    return res.status(404).json({ 
      "msg": `Villager not found with ID = ${id}`,
      id
    })
  }
  var generator = new Generator(villager);
  var _ = await generator.createBuilder();

  var options = new GrammerBuilder({ playerName: [playerName], town: [town] });
  var dialogue = generator.generate(options);
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
  var generator = new Generator(villager);
  var _ = await generator.createBuilder();

  return res.status(200).json({
    raw: generator.builder.data,
    grammer: generator.builder.build()
  });
});