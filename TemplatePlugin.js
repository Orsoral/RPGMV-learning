/*: @plugindesc	A template Plugin with my meta information with a quick example of "clean" function overriding
 * @author Orsoral
 * @param	Name of the parameters.
 * @desc	Description of the parameters.
 * @default	Default values of the parameters.
 * @help	A detailed description of the plugin.
 * adds a manual break line
 */

//Initialize the ability to use plug-in commands
 // var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
 // Game_Interpreter.prototype.pluginCommand = function(command, args)
 // {
 //   _Game_Interpreter_pluginCommand.call(this, command, args);
 //   if (typeof command != 'undefined')
 //   {
 //     command = command.toLowerCase();
 //   }
 // }


//Overwrite a function in the Game

(function(){
  // create a variable to store parameters - it will be an array
  //load plugin parameters, name of the plugin file without the extension between the quotes, without .js extension
  //var could be called more vague, such as parameters because its local. I prefer to be more specific by appending hte file name to the variable name
  var parameters_TemplatePlugin= PluginManager.parameters('TemplatePlugin');
  //To access a value of one of the parameters, identify it between quotes in square brackets. var is a string by default.
  var shortNameOfParameter = parameters_TemplatePlugin['Short Name of the parameters.'];
 
  //to be compatible with other plug-ins that modify same functions
  //store its function in a variable first
  //variable name is structured: name_of_Class_nameOfFunction_previousBehavior
  var _Game_Player_executeMove_previousBehavior =  Game_Player.prototype.executeMove;

  //examples of functions to ovveride found in e.g. rpg_objects.js
  //insert function to override here
  Game_Player.prototype.executeMove = function(direction){
    //call the previous behavior you want to keep, including parameter listed when you inserted the function to override
    _Game_Player_executeMove_previousBehavior.call(this, direction)
    //add your custom behavior below
    $gameMessage.add('hi, ' + shortNameOfParameter);
  }
})();
