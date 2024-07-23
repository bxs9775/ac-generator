import axios from "axios";
import Villager from "../classes/Villager";
import RuleDictionary from "../classes/Builders/RuleDictionary";

/**
 * enum for indicating whether to look for the northern or southern hemisphere
 */
enum Hemisphere{
    north='north',
    south='south'
}

/**
 * Class for fetching data from the Nookipedia API
 */
class NookpediaHelper{
    /**
     * Base API URL
     */
    url:string;
    villagerNames:string[] = [];
    /**
     * request headers for all requests
     */
    headers:{[key: string]:string|undefined};
    
    /**
     * Constructs a new NookpediaHelper class with the base URL and required headers
     * NOOKIPEDIA_KEY needs to be set in a .env file at the base of the project.
     */
    constructor(){
        this.url = "https://api.nookipedia.com";
        this.headers = {
            'X-API-KEY': process.env.NOOKIPEDIA_KEY,
            'Accept-Version': '1.0.0'
        }
    }
    
    async getAllNames() {
        try{
            var acRes = await axios.get(`${this.url}/villagers`,{
                'params': { 'excludedetails': true },
                'headers': this.headers
            });
            this.villagerNames = acRes.data;
        } catch(error){
            console.log('Error constructing Nookipedia Helper - villager data not found');
        }
    }


    /**
     * Gets the name of a random villager
     * @returns the name of a random villager as a string
     */
    async getRandomVillagerName():Promise<string|undefined> {
        try{
            // gets a list of all villagers
           
            // picks a random villager
            // code from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
            var villagerIndex = Math.floor(Math.random()*this.villagerNames.length);

            // return the selected name
            return this.villagerNames[villagerIndex];
        }
        catch(error){
            //console.log(error);
            return undefined;
        }
    }

    /**
     * Gets the villager details for a specific villager
     * @param {string} name the name of the villager whose details to fetch
     * @returns Villager object for the specific villager, of the fetch fails instead returns null
     */
    async getVillager(name:string):Promise<Villager|null>{
        try{
            var acRes = await axios.get(`${this.url}/villagers`,{
                'params': {
                    'name': name,
                    'nhdetails': true
                },
                'headers': this.headers
            });
            console.log('Villager data:\n',acRes.data[0]);
            return new Villager(acRes.data[0]);
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    /**
     * Gets fish data for the given month and hemisphere
     * @param {number} month the month to fetch fish data for
     * @param {Hemisphere} hemi which hemisphere do we want data for 
     * @returns a dictionary of grammer rules for fishing
     */
    async getFish(month:number|string,hemi:Hemisphere=Hemisphere.north):Promise<RuleDictionary>{
        try{
            var acRes = await axios.get(`${this.url}/nh/fish`,{
                params: {
                    'month': month
                },
                'headers': this.headers
            });
            var fish = acRes.data[hemi];
            return {
                "riverFish": fish.filter((fsh:any) => fsh.location === "River").map((fsh:any) => fsh.name),
                "oceanFish": fish.filter((fsh:any) => fsh.location === "Sea").map((fsh:any) => fsh.name),
                "pondFish": fish.filter((fsh:any) => fsh.location === "Pond").map((fsh:any) => fsh.name),
            }
        }
        catch(error){
            console.log(error);
            return {};
        }
    }
}

let instance:NookpediaHelper =  new NookpediaHelper();
instance.getAllNames()
export default instance;