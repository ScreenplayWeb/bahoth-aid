/**
Betrayal at House on the Hill Player Aid (v_1.2 Jan 2017)  Created by Sean Doyle.
NEW:
    -add link to BAHOTH on Avalon Hill website
    -add check for zero players
    -in showCars function, remove inline styling and add class name to allow dark text for father/professor characters.
    -Add skull&crossbones icon as googlefont doesn't show up on Android devices.
    -Create Green & black gradient to match box cover
    -ADD DISCLAIMER TEXT
    -Remove unused variables

TODO:  (NOTE:  ##REL are things to be added to next release) 
#####FUNCTIONALITY##
-ADD BIRTHDAY PROPERTY AND PUT THAT PLAYER FIRST IN THE ORDER (TO MATCH GAME RULE FOR STARTING ORDER)
-ADD for in LOOP

#####STYLING##
-make responsive/test on tablets & phones
*/
window.onload = function () {
    "use strict";
//Game variables
    var playerName, charPick;
    var playerArray = [];
    var playerHelpText = "Player Name?";
    var allTds; //ARRAY OF ALL <td> ELEMENTS

//====Get elements====
var plrDisplay = document.getElementById("playerTables");
var plrForm = document.getElementById("PlayerForm");
var startBtn = document.getElementById("btnSub");
var allTxtBs = document.getElementsByTagName("input");

//Clear help text from text boxes on focus
for (var ia = 0; ia < allTxtBs.length; ia += 1){
    allTxtBs[ia].onfocus = function () {
        if(this.value == playerHelpText){
            this.value = "";
        }
    }
}

//====Check text boxes on blur
for (var ib = 0; ib < allTxtBs.length; ib += 1){
    allTxtBs[ib].onblur = function(){
        var currentClass, charPair;
        //Reset helper text if empty
        if (this.value == "") {
            this.value = playerHelpText;
        } else {
            //Hide the other Name of same colour
            currentClass = this.parentElement.className;
            if(currentClass.length === 6){
                charPair = document.getElementsByClassName(currentClass);
                this.parentElement.className = currentClass + "Set";
                for(var ii = 0; ii < charPair.length; ii += 1){
                    charPair[ii].style.display = "none";
                    charPair[ii].blur();
                }
            }
            
        }//end else
    }//END onblur anon function
}


/*#### function changeTraitValue
* FUNCTION TO CHANGE THE ATTRIBUTE LEVELS
*/
function changeTraitValue(){
    var parentRow, rowChldrn, ri;
    parentRow = this.parentNode;//GET ROW OF CLICKED <td>
    rowChldrn = parentRow.childNodes;//ARRAY OF SIBLING <td>

    //REMOVE TR_actv CLASS FROM ALL <td>
    for(ri = 1; ri < rowChldrn.length; ri++) {
        if(rowChldrn[ri].className.indexOf("d") != -1){
            rowChldrn[ri].className = "TR_default";
        }else{
            rowChldrn[ri].className = "";
        }
    }
    //ADD ACTIVE CLASS (TR_actv)TO CLICKED <td>
    if(this.className.indexOf("d") != -1){
        this.className += "TR_default TR_actv";
    }else{
        this.className += "TR_actv";
    }
}//END changeTraitValue


/*#### function showChars
* Display characters selected by players.
* Called by startGame()
*/
    function showChars(){
        var playerChar, j;
        for(j = 0; j < playerArray.length; j++) {
            playerChar = characterArray[playerArray[j].pl_charIndx];

            plrDisplay.innerHTML += "<div class='playerBox2'><div class='charBox2 " + playerArray[j].pl_getColr() + "'><h2>" + playerArray[j].pl_name.toUpperCase() + "</h2><img src='images/" + playerArray[j].pl_getImg() + ".png' width='100' alt='My Character Image' /><p>" + playerArray[j].pl_getCharName() + "</p></div><div class='traitBox'><table id='tbl" + j +"'></table></div></div>";
            
            //DISPLAY TRAIT ROWS
            playerChar.shoMit(j);
            playerChar.shoSpd(j);
            playerChar.shoSan(j);
            playerChar.shoKno(j);
        }
    }//END showChars


/*#### function pickChars
* Get Player names and their character choices.
* Called by startGame()
*/
    function pickChars(){
        var allInputs = document.getElementsByTagName("input");
        var i, plyrNameIn, newPlayer, plyrCharPick;
        for (i = 0; i < allInputs.length; i +=1){
            //if valid
            if(allInputs[i].value !== "" && allInputs[i].value !== playerHelpText){
                //get playerName & character ID
                plyrNameIn = allInputs[i].value;
                plyrCharPick = allInputs[i].id;
                
                //create new Player & add to Player Array
                newPlayer = new Player(plyrNameIn, (parseInt(plyrCharPick.substring(4))));
                playerArray.push(newPlayer);
            }
        }//END forloop
    }//END pickChars

/*#### function setTDListenrs
* Add onclick event to <td> to allow for attribute changes.
* Click calls changeTraitValue.
* Called by startGame()
*/
function setTDListenrs(){
    var y;
    var allTds = document.getElementsByTagName("td");	
    for(y = 0; y < allTds.length; y += 1){
        //DON'T ADD CLICK EVENT TO <td class="traitName">
        if(allTds[y].className != "traitName"){
            allTds[y].onclick = changeTraitValue;
        }
    }

}//END setTdListenrs


/*#### function startCheck
 Make sure there is at least one player before starting the game.
**/
function startCheck(){
    var playerCount = 0, i;
    //check for names in text boxes
    for (i = 0; i < allTxtBs.length; i++) {
        if (allTxtBs[i].value !== "" && allTxtBs[i].value !== "Player Name?") {
            playerCount++;
        }
    }

    if (playerCount > 0) {
        startGame();
    }
}
/*#### function startGame
 Start the game.
**/
function startGame(){
    //Hide Player form
    plrForm.style.display = "none";

    //Loop through inputs and grab user names & selected characters
    pickChars();

    //Display selected characters to begin game.
    showChars();

    //Set onclick listeners for attributes.
    setTDListenrs();
}//END startGame

//========SET LISTENERS========
startBtn.onclick = startCheck;

};//END onload FUNCTION