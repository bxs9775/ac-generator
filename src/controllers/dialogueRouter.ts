import express from "express";
import BaseVillager from "../classes/Villager/BaseVillager";
import BaseVillagerHelper from "../helpers/nookpediaHelper";
import BaseVillagerResponse from "../classes/VillagerResponse";
import TraceryBuilder from "../classes/Builders/TraceryBuilder";
import ErrorResponse from "../classes/ErrorResponse";
import TopicEnum from "../enums/TopicEnum";
import StringListRule from "../classes/Rules/StringListRule";

export const dialogueRouter = express.Router();

/**
 * Helper method for fetching villager data from the API
 * @param {string} name name of the villager to fetch, if not provided the router picks a random villager 
 * @returns the VillagerResponse object for the request
 */
async function getVillager(name?:string):Promise<BaseVillagerResponse>{
  if(!name){
    name = BaseVillagerHelper.getRandomVillagerName();
  }
  var villager = await BaseVillagerHelper.getVillager(name as string);
  if(!villager){
    return new BaseVillagerResponse(undefined,new ErrorResponse(404,`Villager not found with name = ${name}`));
  } else {
    return new BaseVillagerResponse(villager);
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
  var villager:BaseVillager = villagerResp.villager as BaseVillager;
  var playerName: string = (req.query.playerName)?req.query.playerName as string:"Player";
  var town: string = (req.query.town)?req.query.town as string:"Town";
  
  var rawTopic:string|undefined = req.query.topic as string|undefined;
  console.log("Raw topic: ", rawTopic);
  var topic:TopicEnum;
  if(typeof rawTopic === 'undefined'){
    topic = TopicEnum.sample();
  } else {
    topic = TopicEnum.get(rawTopic);
  }
  console.log('Topic: ',topic.toString());

  //var builder = new TraceryBuilder({"playerName": [playerName], "town": [town] });
  var builder = new TraceryBuilder({
    "playerName": new StringListRule([playerName]),
    "town": new StringListRule([town])
  });
  var dialogue = villager.generateGrammar(builder,topic).generate();
  
  return res.status(200).json({
    "villager": villager.toJson(),
    "dialogue": dialogue
  })
});

/**
 * Gets the JSON grammar rules object for a villager, if a villager name is not provided a random villager is selected
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
  var villager:BaseVillager = villagerResp.villager as BaseVillager;

  var villager:BaseVillager = villagerResp.villager as BaseVillager;
  var playerName: string = (req.query.playerName)?req.query.playerName as string:"Player";
  var town: string = (req.query.town)?req.query.town as string:"Town";
  var rawTopic:string|undefined = req.query.topic as string|undefined;
  console.log("Raw topic: ", rawTopic);
  var topic:TopicEnum;
  if(typeof rawTopic === 'undefined'){
    topic = TopicEnum.sample();
  } else {
    topic = TopicEnum.get(rawTopic);
  }
  console.log('Topic: ',topic.toString());
  
  //var builder = new TraceryBuilder({"playerName": [playerName], "town": [town] });
  var builder = new TraceryBuilder({
    "playerName": new StringListRule([playerName]),
    "town": new StringListRule([town])
  });
  var grammar = villager.generateGrammar(builder,topic);

  return res.status(200).json({
    raw: grammar.rawGrammar
  });
});