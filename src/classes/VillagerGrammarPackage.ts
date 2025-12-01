import TraceryBuilder from "./Builders/TraceryBuilder";
import GrammarSet from "./GrammarSet";

export default class VillagerGrammarPackage{
    public readonly generalGrammar:TraceryBuilder;
    public readonly islandLifeGrammarSet:GrammarSet;
    public readonly hobbyGrammarSet:GrammarSet;

    constructor(generalGrammar:TraceryBuilder,islandLifeGrammarSet:GrammarSet,hobbyGrammarSet:GrammarSet){
        this.generalGrammar = generalGrammar;
        this.islandLifeGrammarSet = islandLifeGrammarSet;
        this.hobbyGrammarSet = hobbyGrammarSet;
    }

}