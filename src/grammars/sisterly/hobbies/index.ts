import GrammarSet from "../../../classes/GrammarSet";

import educationGrammar from "./EducationGrammar";
import fitnessGrammar from "./FitnessGrammar";
import musicGrammar from "./MusicGrammar";
import natureGrammar from "./NatureGrammar";
import playGrammar from "./PlayGrammar";

export * from "./EducationGrammar";
export * from "./FitnessGrammar";
export * from "./MusicGrammar";
export * from "./NatureGrammar";
export * from "./PlayGrammar"

let hobbyGrammerSet:GrammarSet = new GrammarSet(
    [
        ['education',educationGrammar],
        ['fitness',fitnessGrammar],
        ['music',musicGrammar],
        ['nature',natureGrammar],
        ['play',playGrammar]
    ]
)
export default hobbyGrammerSet;