import express from "express";
import Villager from "../classes/Villager";
import VillagerHelper from "../helpers/nookpediaHelper";
import VillagerResponse from "../classes/VillagerResponse";
import GrammerBuilder from "../classes/Builders/GrammerBuilder";
import Generator from "../classes/Generator";
import ErrorResponse from "../classes/ErrorResponse";

export const dialogueRouter = express.Router();

let villagerHelper = new VillagerHelper();

/**
 * Helper method for fetching villager data from the API
 * @param {string} name name of the villager to fetch, if not provided the router picks a random villager 
 * @returns the VillagerResponse object for the request
 */
async function getVillager(name?:string):Promise<VillagerResponse>{
  if(typeof(name) != undefined){
    name = await villagerHelper.getRandomVillagerName();
    if(typeof(name) === "undefined"){
      return new VillagerResponse(undefined,new ErrorResponse(500,'Unexpected error while fetching villager names.'));
    }
  }
  var villager = await villagerHelper.getVillager(name as string);
  if(!villager){
    return new VillagerResponse(undefined,new ErrorResponse(404,`Villager not found with name = ${name}`));
  } else {
    return new VillagerResponse(villager);
  }
}

/**
 * Gets generated dialogue for a villager, if a villager name is not provided a random villager is selected
 */
dialogueRouter.get('/dialogue',async (req,res) => {
  let villagerResp = await getVillager(req.query.name as string);
  console.log('Response:\n',villagerResp);
  console.log('Has error: ',typeof(villagerResp.error) !== "undefined");
  if(typeof(villagerResp.error) !== "undefined"){
    let error = villagerResp.error as ErrorResponse;
    return res.status(error.code).json({ 
      "msg": error.msg,
    });
  }
  var villager:Villager = villagerResp.villager as Villager;
  var playerName: string = (req.query.playerName)?req.query.playerName as string:"Player";
  var town: string = (req.query.town)?req.query.town as string:"Town";

  var generator = new Generator(villager);
  var _ = await generator.createBuilder();

  var options = new GrammerBuilder({ playerName: [playerName], town: [town] });
  var dialogue = generator.generate(options);
  return res.status(200).json({
    "villager": villager.toJson(),
    "dialogue": dialogue
  })
});

/**
 * Gets the JSON grammer rules object for a villager, if a villager name is not provided a random villager is selected
 */
dialogueRouter.get('/rules', async (req,res) => {
  let villagerResp = await getVillager(req.query.name as string);
  console.log('Response:\n',villagerResp);
  console.log('Has error: ',typeof(villagerResp.error) !== "undefined");
  if(typeof(villagerResp.error) !== "undefined"){
    let error = villagerResp.error as ErrorResponse;
    return res.status(error.code).json({ 
      "msg": error.msg,
    });
  }
  var villager:Villager = villagerResp.villager as Villager;
  var generator = new Generator(villager);
  var _ = await generator.createBuilder();

  return res.status(200).json({
    raw: generator.builder.data,
    grammer: generator.builder.build()
  });
});