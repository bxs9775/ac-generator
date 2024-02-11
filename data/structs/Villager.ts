import Character from "./Character";
import Tool from "./Tool";

export default interface Villager extends Character{
    heldTool:Tool;
}