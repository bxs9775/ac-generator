export default interface IRule{
    readonly ruleType:string;
    readonly rawType:string;
    rawValue:() => any;
    build:() => Array<string>;
    copy:() => IRule;
}