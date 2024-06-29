/**
 * Class for storing a summary of an error reported from the API
 */
export default class ErrorResponse{
    /**
     * The error code reported
     */
    code:number;
    /**
     * The error message
     */
    msg:string;

    /**
     * Creates a new ErrrorResponse object
     * @param {number} code the error code reported
     * @param {string} msg the message reported
     */
    constructor(code:number=200,msg:string=''){
        this.code = code;
        this.msg = msg;
    }
}