export default class ErrorResponse{
    code:number;
    msg:string;

    constructor(code:number=200,msg:string=''){
        this.code = code;
        this.msg = msg;
    }
}