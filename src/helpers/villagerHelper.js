const axios = require("axios")
const Villager = require("../classes/Villager");

const url = "https://acnhapi.com/v1/villagers/"

/**
 * @summary Gets a random villager ID
 * @returns numerical ID for a villager
 * Addapted from newID() function in https://codepen.io/sharnajh/pen/zYBVLYe
 */
const getRandomId = () => {
    return Math.floor(Math.random() * 391) + 1;
}

const getVillager = async (index) => {
    try{
        acRes = await axios.get(`${url}\\${index}`);
        return new Villager(acRes.data);
    }
    catch(error){
        return null;
    }
}

module.exports = { getVillager, getRandomId }