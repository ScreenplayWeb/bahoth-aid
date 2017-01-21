/**
 Betrayal at House on the Hill Player Aid v_1.2
 Created by Sean Doyle.
 This file contains the Character constructor function, character trait values, and the full array of characters.

 NEW IN THIS VERSION:
    -Player constructor moved to player.js
    -Remove 0 attribute values from character trait arrays.
    -Hardcode Skull & crossbones as 0 value attribute.
    -implement use strict & clean up code
*/

/**########## CHARACTER CONSTRUCTOR FUNCTION ##########**/
function Character(name, photo, colour, MII, SPI, SAI, KNI){
    "use strict";
    this.ch_name = name;
    this.ch_img = photo;
    this.ch_Colr = colour;
//TRAIT VALUE ARRAY STARTING INDICES
    this.mitIndx = MII;
    this.spdIndx = SPI;
    this.sanIndx = SAI;
    this.knoIndx = KNI;
//TRAIT VALUE ARRAYS
    this.tr_mit = [];
    this.tr_spd = [];
    this.tr_san = [];
    this.tr_kno = [];
//DISPLAY TRAITS
    //MIGHT
    this.shoMit = function(tableIndex){
        var tblId = "tbl" + tableIndex;
        var thisTbl, mitRow, mitTrt, mitTD0, mitTD;
        //GET TABLE AND CREATE ROW WITH TRAIT NAME
        thisTbl = document.getElementById(tblId);
        mitRow = document.createElement("tr");
        mitTrt = document.createElement("td");
        mitTrt.setAttribute("class", "traitName");
        mitTrt.textContent = "Might";
        mitRow.appendChild(mitTrt);
        mitTD0 = document.createElement("td");
        mitTD0.innerHTML = "&#9760;";
        mitRow.appendChild(mitTD0);

        //CREATE <td> WITH TRAIT VALUES AND ADD TO ROW
        for(var i = 0; i < this.tr_mit.length; i++){
            //CHECK IF DEFAULT AND ADD CLASS IF SO
            if(i == this.mitIndx){
                mitTD = document.createElement("td");
                mitTD.setAttribute("name", this.ch_img + "Mit");
                mitTD.setAttribute("class", "TR_default TR_actv");
                mitTD.textContent = this.tr_mit[i];
                mitRow.appendChild(mitTD);
            }else{
                mitTD = document.createElement("td");
                mitTD.setAttribute("name", this.ch_img + "Mit");
                mitTD.textContent = this.tr_mit[i];
                mitRow.appendChild(mitTD);
            }
        }
        //ADD MIGHT ROW TO TABLE
        thisTbl.appendChild(mitRow);
    };

    //SPEED
    this.shoSpd = function(tableIndex){
        var tblId = "tbl" + tableIndex;
        var thisTbl, spdRow, spdTrt, spdTD0, spdTD;

        //GET TABLE AND CREATE ROW WITH TRAIT NAME
        thisTbl = document.getElementById(tblId);
        spdRow = document.createElement("tr");
        spdTrt = document.createElement("td");
        spdTrt.setAttribute("class", "traitName");
        spdTrt.textContent = "Speed";
        spdRow.appendChild(spdTrt);
        spdTD0 = document.createElement("td");
        spdTD0.innerHTML = "&#9760;";
        spdRow.appendChild(spdTD0);

        //CREATE <td> WITH TRAIT VALUES AND ADD TO ROW
        for(var i = 0; i < this.tr_spd.length; i++){
            //CHECK IF DEFAULT AND ADD CLASS IF SO
            if(i == this.spdIndx){
                spdTD = document.createElement("td");
                spdTD.setAttribute("name", this.ch_img + "Spd");
                spdTD.setAttribute("class", "TR_default TR_actv");
                spdTD.textContent = this.tr_spd[i];
                spdRow.appendChild(spdTD);
            }else{
                spdTD = document.createElement("td");
                spdTD.setAttribute("name", this.ch_img + "Spd");
                spdTD.textContent = this.tr_spd[i];
                spdRow.appendChild(spdTD);
            }
        }
        //ADD SPEED ROW TO TABLE
        thisTbl.appendChild(spdRow);
    };

    //SANITY
    this.shoSan = function(tableIndex){
        var tblId = "tbl" + tableIndex;
        var thisTbl, sanRow, sanTrt, sanTD0, sanTD;

        //GET TABLE AND CREATE ROW WITH TRAIT NAME
        thisTbl = document.getElementById(tblId);
        sanRow = document.createElement("tr");
        sanTrt = document.createElement("td");
        sanTrt.setAttribute("class", "traitName");
        sanTrt.textContent = "Sanity";
        sanRow.appendChild(sanTrt);
        sanTD0 = document.createElement("td");
        sanTD0.innerHTML = "&#9760;";
        sanRow.appendChild(sanTD0);

        //CREATE <td> WITH TRAIT VALUES AND ADD TO ROW
        for(var i = 0; i < this.tr_san.length; i++){
            //CHECK IF DEFAULT AND ADD CLASS IF SO
            if(i == this.sanIndx){
                sanTD = document.createElement("td");
                sanTD.setAttribute("name", this.ch_img + "San");
                sanTD.setAttribute("class", "TR_default TR_actv");
                sanTD.textContent = this.tr_san[i];
                sanRow.appendChild(sanTD);
            }else{
                sanTD = document.createElement("td");
                sanTD.setAttribute("name", this.ch_img + "San");
                sanTD.textContent = this.tr_san[i];
                sanRow.appendChild(sanTD);
            }
        }
        //ADD SANITY ROW TO TABLE
        thisTbl.appendChild(sanRow);
    };

    //KNOWLEDGE
    this.shoKno = function(tableIndex){
        var tblId = "tbl" + tableIndex;
        var thisTbl, knoRow, knoTrt, knoTD0, knoTD;

        //GET TABLE AND CREATE ROW WITH TRAIT NAME
        thisTbl = document.getElementById(tblId);
        knoRow = document.createElement("tr");
        knoTrt = document.createElement("td");
        knoTrt.setAttribute("class", "traitName");
        knoTrt.textContent = "Knowledge";
        knoRow.appendChild(knoTrt);
        knoTD = document.createElement("td");
        knoTD.innerHTML = "&#9760;";
        knoRow.appendChild(knoTD);

        //CREATE <td> WITH TRAIT VALUES AND ADD TO ROW
        for(var i = 0; i < this.tr_kno.length; i++){
            //CHECK IF DEFAULT AND ADD CLASS IF SO
            if(i == this.knoIndx){
                knoTD = document.createElement("td");
                knoTD.setAttribute("name", this.ch_img + "Kno");
                knoTD.setAttribute("class", "TR_default TR_actv");
                knoTD.textContent = this.tr_kno[i];
                knoRow.appendChild(knoTD);
            }else{
                knoTD = document.createElement("td");
                knoTD.setAttribute("name", this.ch_img + "Kno");
                knoTD.textContent = this.tr_kno[i];
                knoRow.appendChild(knoTD);
            }
        }
        //ADD KNOWLEDGE ROW TO TABLE
        thisTbl.appendChild(knoRow);
    };

//GET TRAIT VALUES
    this.getSpd = function(){
        return this.tr_spd[this.spdIndx];
    };
    this.getMit = function(){
        return this.tr_mit[this.mitIndx];
    };
    this.getSan = function(){
        return this.tr_san[this.sanIndx];
    };
    this.getKno = function(){
        return this.tr_kno[this.knoIndx];
    };
}//END CHARACTER CONSTRUCTOR


//BUILD CHARACTERS WITH CONSTRUCTOR FUNCTION & ADD TRAIT VALUE ARRAYS
//var x = new Character( name,      photo,  colour,MII,SPI,SAI,KNI);
var ox = new Character("Ox Bellows", "ox", "e2222d", 3, 5, 3, 3);
ox.tr_mit = [4,5,5,6,6,7,8,8];
ox.tr_spd = [2,2,2,3,4,5,5,6];
ox.tr_san = [2,2,3,4,5,5,6,7];
ox.tr_kno = [2,2,3,3,5,5,6,6];

var darrin = new Character('Darrin "Flash" Williams', "darrin", "e2222d",3,5,3,3);
darrin.tr_mit = [2,3,3,4,5,6,6,7];
darrin.tr_spd = [4,4,4,5,6,7,7,8];
darrin.tr_san = [1,2,3,4,5,5,5,7];
darrin.tr_kno = [2,3,3,4,5,5,5,7];

var brandon = new Character("Brandon Jaspers", "brandon", "22a148",4,3,4,3);
brandon.tr_mit = [2,3,3,4,5,6,6,7];
brandon.tr_spd = [3,4,4,4,5,6,7,8];
brandon.tr_san = [3,3,3,4,5,6,7,8];
brandon.tr_kno = [1,3,3,5,5,6,6,7];

var peter = new Character("Peter Akimoto", "peter", "22a148",3,4,4,3);
peter.tr_mit = [2,3,3,4,5,5,6,8];
peter.tr_spd = [3,3,3,4,6,6,7,7];
peter.tr_san = [3,4,4,4,5,6,6,7];
peter.tr_kno = [3,4,4,5,6,7,7,8];

var zoe = new Character("Zoe Ingstrom", "zoe", "efac1f",4,4,3,3);
zoe.tr_mit = [2,2,3,3,4,4,6,7];
zoe.tr_spd = [4,4,4,4,5,6,8,8];
zoe.tr_san = [3,4,5,5,6,6,7,8];
zoe.tr_kno = [1,2,3,4,4,5,5,5];

var missy = new Character("Missy Dubourde", "missy", "efac1f",4,3,3,4);
missy.tr_mit = [2,3,3,3,4,5,6,7];
missy.tr_spd = [3,4,5,6,6,6,7,7];
missy.tr_san = [1,2,3,4,5,5,6,7];
missy.tr_kno = [2,3,4,4,5,6,6,6];

var father = new Character("Father Rhinehardt", "father", "e5e3e6",3,3,5,4);
father.tr_mit = [1,2,2,4,4,5,5,7];
father.tr_spd = [2,3,3,4,5,6,7,7];
father.tr_san = [3,4,5,5,6,7,7,8];
father.tr_kno = [1,3,3,4,5,6,6,8];

var professor = new Character("Professor Longfellow", "professor", "e5e3e6",3,4,3,5);
professor.tr_mit = [1,2,3,4,5,5,6,6];
professor.tr_spd = [2,2,4,4,5,5,6,6];
professor.tr_san = [1,3,3,4,5,5,6,7];
professor.tr_kno = [4,5,5,5,5,6,7,8];

var heather = new Character("Heather Granville", "heather", "f750d9",3,3,3,5);
heather.tr_mit = [3,3,3,4,5,6,7,8];
heather.tr_spd = [3,3,4,5,6,6,7,8];
heather.tr_san = [3,3,3,4,5,6,6,6];
heather.tr_kno = [2,3,3,4,5,6,7,8];

var jenny = new Character("Jenny LeClerc", "jenny", "f750d9",3,4,5,3);
jenny.tr_mit = [3,4,4,4,4,5,6,8];
jenny.tr_spd = [2,3,4,4,4,5,6,8];
jenny.tr_san = [1,1,2,4,4,4,5,6];
jenny.tr_kno = [2,3,3,4,4,5,6,8];

var vivian = new Character("Vivian Lopez", "vivian", "134690",3,4,3,4);
vivian.tr_mit = [2,2,2,4,4,5,6,6];
vivian.tr_spd = [3,4,4,4,4,6,7,8];
vivian.tr_san = [4,4,4,5,6,7,8,8];
vivian.tr_kno = [4,5,5,5,5,6,6,7];

var madame = new Character("Madame Zostra", "madame", "134690",4,3,3,4);
madame.tr_mit = [2,3,3,4,5,5,5,6];
madame.tr_spd = [2,3,3,5,5,6,6,7];
madame.tr_san = [4,4,4,5,6,7,8,8];
madame.tr_kno = [1,3,4,4,4,5,6,6];

//CHARACTER ARRAY
var characterArray = [ox, darrin, brandon, peter, zoe, missy, father, professor, heather, jenny, vivian, madame];