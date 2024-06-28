import Villager from "./Villager";
import ErrorResponse from './ErrorResponse';

export default class VillagerResponse{
    villager?:Villager;
    error?:ErrorResponse;

    constructor(villager?:Villager,error?:ErrorResponse){
        this.villager=villager;
        this.error=error;
    }
}