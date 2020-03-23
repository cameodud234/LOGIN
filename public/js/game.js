window.addEventListener("load", START);

var objID = "box";  // created to give unique id to GenericBox

function START(){

    const gameBtn = document.getElementById("gameButton");
    const gameWin = document.getElementById("gameBox");


    gameBtn.addEventListener("click", startGame);

    function startGame(){
        // Set game up to play
        console.log("start game button pressed");
        deleteNodesOf(gameWin);

        var box = new GenericBox(30,30, gameWin, "red");
        box.setMotion(5);
        console.log(typeof(objID));
    }

}



function deleteNodesOf(parent){
    while(parent.childNodes.length){
        parent.removeChild(parent.childNodes[0]);
    }
}


class GenericBox{
    constructor(width, height, parent, color){
        if(width < 0 || height < 0 || typeof(parent) !== "object" || typeof(color) !== "string"){
            throw "Check you GenericBox input values";
        }
        else{
            this.width = width + "px";
            this.height = height + "px";
            this.parent = parent;

            this.box = document.createElement('div');
            objID += objID + "1";
            this.signiture = objID;
            this.box.setAttribute("id", this.signiture);
            this.box.style.width = this.width;
            this.box.style.height = this.height;
            this.box.style.backgroundColor = "white";
            this.parent.appendChild(this.box);
        }
    }
    setMotion(speed){   
        if(speed < 0){
            throw "Speed needs to greater than zero";
        }
        else{
            var pos = 0; 
            var id = setInterval(frame, speed);
            var getElem = document.getElementById(this.signiture);
            function frame(){
                if(pos === 800){
                    clearInterval(id);
                }
                else{
                    pos++;
                    getElem.style.top = pos + "px";
                    getElem.style.left = pos + "px";
                }
            }
        }

    }
}