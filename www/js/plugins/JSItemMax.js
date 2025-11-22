/*:

 * @plugindesc Allows you to set the max number of each item/armor/weapon using numbers or JS codes. Click help for How To Use
 YEP Shop Core compatibility fix by Maliki79
 * @author Adiktuzmiko

 *@help To use just add this notetag to your items:
 <maxItems:value>
 value being any static number or a valid JS code

 Example:

 <maxItems:5> -> Sets that item to have a maximum amount of 5
 <maxItems:$gameVariables.value(1)> -> Sets the item to have a maximum amount
 equal to whatever the current value of Game Variable 001 is

 Note: It is important that the file name of this plugin is JSItemMax.js

 * @param General Item Max
 * @desc The general maximum amount for each item; you can use either a number or a valid JS code here
 * @default 99

*/

var JSItemMax = {};
JSItemMax.params = PluginManager.parameters('JSItemMax');
JSItemMax.generalItemMax = JSItemMax.params["General Item Max"];

Game_Party.prototype.maxItems = function(item) {
  if (!item) return 0; //Fix by Maliki79
  if (item.meta.maxItems) {
    return eval(item.meta.maxItems);
  } else {
      return eval(JSItemMax.generalItemMax);
      }

};