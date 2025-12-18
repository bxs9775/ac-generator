import generalGrammar from "./GeneralGrammar";
import islandLifeGrammarSet from "./islandLife";
import hobbyGrammarSet from "./hobbies";
import VillagerGrammarPackage from "../../classes/VillagerGrammarPackage";

let sisterlyVillagerPackage:VillagerGrammarPackage = new VillagerGrammarPackage(generalGrammar,islandLifeGrammarSet,hobbyGrammarSet);
export default sisterlyVillagerPackage;