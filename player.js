/**
 Betrayal at House on the Hill Player Aid v_1.2
 Created by Sean Doyle.
 This file contains the Player constructor function.

NEW IN THIS VERSION:
    -Player constructor removed from characters.js.
    -implement use strict
    -Passes JSLint (except for TODO comment)
TODO:
-
*/
/**#### PLAYER OBJECT CONSTRUCTOR FUNCTION ####
*PARAMS:
    playerName (string): Name of the player.
    charArrayIndex (int): The characterArray index for this player's character.
*/
function Player(playerName, charArrayIndex) {
    "use strict";
    this.pl_name = playerName;
    this.pl_charIndx = charArrayIndex;//Index of Character Array
    this.myChar = characterArray[this.pl_charIndx];//Get character object

    //Methods to get Character style values
    this.pl_getColr = function () {
        var myColour = this.myChar.ch_Colr;
        return myColour;
    };

    this.pl_getImg = function () {
        var myImage = this.myChar.ch_img;
        return myImage;
    };

    //METHODS TO GET TRAIT VALUES
    this.pl_getCharName = function () {
        var myChar = characterArray[this.pl_charIndx].ch_name;
        return myChar;
    };
    this.pl_getSpd = function () {
        var mySpd = characterArray[this.pl_charIndx].getSpd();
        return mySpd;
    };
    this.pl_getMit = function () {
        var myMit = characterArray[this.pl_charIndx].getMit();
        return myMit;
    };
    this.pl_getSan = function () {
        var mySan = characterArray[this.pl_charIndx].getSan();
        return mySan;
    };
    this.pl_getKno = function () {
        var myKno = characterArray[this.pl_charIndx].getKno();
        return myKno;
    };
}//END PLAYER CONSTRUCTOR