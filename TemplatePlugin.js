/*: @plugindesc	A template Plugin with my meta information with a quick example of "clean" function overriding
 * @author Orsoral
 * @param	Name of the parameters.
 * @desc	Description of the parameters.
 * @default	Default values of the parameters.
 * @help	A detailed description of the plugin.
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
    $gameMessage.add("hi");
  }
})();
