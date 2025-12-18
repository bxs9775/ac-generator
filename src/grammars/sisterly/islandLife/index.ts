import GrammarSet from "../../../classes/GrammarSet";

import bugGrammar from "./BugGrammer";
import fishGrammar from "./FishGrammer";
import digGrammar from "./DigGrammer";

export * from "./BugGrammer";
export * from "./FishGrammer";
export * from "./DigGrammer";

let baseGrammerSet:GrammarSet = new GrammarSet(
    [
        ['bug',bugGrammar],
        ['dig',digGrammar],
        ['fish',fishGrammar]
    ]
)
export default baseGrammerSet;