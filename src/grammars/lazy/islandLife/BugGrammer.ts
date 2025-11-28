import bugGrammar from "../../baseVillager/islandLife/BugGrammer";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let lazyBugGrammar:GrammarBuilder = bugGrammar.copy();

(lazyBugGrammar.data['describeBugHunt'] as ExpansionRule).updateRule({
    toolVerb: ['make friends with'],
    toolNoun: ['bug #friend#']
});

export default lazyBugGrammar;