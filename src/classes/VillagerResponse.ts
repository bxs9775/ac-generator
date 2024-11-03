import BaseVillager from "./Villager/BaseVillager";
import ErrorResponse from './ErrorResponse';

/**
 * Class wrapping a response from an API call to fetch a villager
 */
export default class VillagerResponse{
    /**
     * Data on the villager. If something went wrong during fetching data, this will be undefined
     */
    villager?:BaseVillager;
    /**
     * Error data. If the fetch succeeds this will be undefined
     */
    error?:ErrorResponse;

    /**
     * Creates a new response instance
     * @param {Villager} villager fetched villager data 
     * @param {ErrorResponse} error error data 
     */
    constructor(villager?:BaseVillager,error?:ErrorResponse){
        this.villager=villager;
        this.error=error;
    }
}