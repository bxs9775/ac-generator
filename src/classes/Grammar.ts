

export default class Grammar{
    rawGrammar:any;

    constructor(data:any=null){
        this.rawGrammar = data;
    }

    generate():string{
        return this.rawGrammar.flatten("#origin#");
    }
}