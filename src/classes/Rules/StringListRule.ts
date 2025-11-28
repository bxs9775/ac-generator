import IRule from "../../interfaces/IRule";

export default class StringListRule implements IRule{
    ruleType:string = "StringListRule";
    rawType: string = 'Array<string>';
    data:Array<string>;
    
    constructor(data:Array<string>=[]){
        this.data = data;
    }
    rawValue():Array<string>{
        return this.data;
    };

    updateRule(newValues:Array<string>):StringListRule{
            this.data = [...this.data, ...newValues];
            return this;
        }

    build():Array<string>{
        //console.log("string list data",this.rawValue())
        return new Array(...this.rawValue());
    };

    copy():StringListRule{
        return new StringListRule(new Array(...this.data));
    }
}