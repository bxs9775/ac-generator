import TraceryBuilder from "./Builders/TraceryBuilder";

export default class GrammarSet extends Map<string,TraceryBuilder>{
    /**
     * Combines 2 grammer sets into a new set
     * Based on Approach 1 in https://www.geeksforgeeks.org/javascript-program-to-combine-values-of-two-maps-having-same-key/
     * @param {GrammarSet} other the GrammerSet to be combined with
     */
    addGrammarSet(other:GrammarSet):GrammarSet{
        let combinedSet:GrammarSet = new GrammarSet([...this]);

        other.forEach((value,key) => {
            if(combinedSet.has(key)){
                // if the set has this key combine grammers
                let grammer = (new TraceryBuilder())
                    .addObject(combinedSet.get(key) as TraceryBuilder)
                    .addObject(value)
                combinedSet.set(key,grammer);

            } else {
                // else add the new grammer
                combinedSet.set(key,value);
            }
        })
        return combinedSet;
    }
}