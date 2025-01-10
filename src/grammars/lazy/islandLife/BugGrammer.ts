import bugGrammar from "../../baseVillager/islandLife/BugGrammer";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";

let lazyBugGrammar:GrammarBuilder = new GrammarBuilder().addObject(bugGrammar);

lazyBugGrammar.data["describeBugHunt"][0].addRule("toolVerb","make friends with");
lazyBugGrammar.data["describeBugHunt"][0].addRule("toolNoun","bug #friend#");

export default lazyBugGrammar;