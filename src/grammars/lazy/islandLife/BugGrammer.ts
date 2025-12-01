import bugGrammar from "../../baseVillager/islandLife/BugGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let lazyBugGrammar:TraceryBuilder = bugGrammar.copy();

(lazyBugGrammar.data['describeBugHunt'] as ExpansionRule).updateRule({
    toolVerb: ['make friends with'],
    toolNoun: ['bug #friend#']
});

export default lazyBugGrammar;