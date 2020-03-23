window.addEventListener("load", START);

var objID = "";  // created to give unique id to GenericBox
var objCount = 0; // keeps trap of how many game objects are created

function START(){

    const gameBtn = document.getElementById("gameButton");
    const gameWin = document.getElementById("gameBox");


    gameBtn.addEventListener("click", startGame);

    function startGame(){
        // Set game up to play
        console.log("start game button pressed");
        deleteNodesOf(gameWin);

        var box1 = new GenericBox1(30,30, gameWin, "red");
        box1.setSpeed(1);
        box1.setMotion();
        //var box2 = new GenericBox1(30,30, gameWin, "green");
    }

}



function deleteNodesOf(parent){
    while(parent.childNodes.length){
        parent.removeChild(parent.childNodes[0]);
    }
}


class GenericBox1{
    constructor(width, height, parent, color){
        if(width < 0 || height < 0 || typeof(parent) !== "object" || typeof(color) !== "string"){
            throw "Check you GenericBox input values";
        }
        else{
            this.width = width + "px";
            this.height = height + "px";
            this.parent = parent;
            this.color = color;

            this.box = document.createElement('div');
            objCount++;  // called from global count variable i
            objID = "unique" + objCount;  // creating the unique id
            this.signiture = objID;
            this.box.setAttribute("id", this.signiture);
            this.box.style.position = "relative";
            this.box.style.width = this.width;
            this.box.style.height = this.height;
            this.box.style.backgroundColor = this.color;
            this.parent.appendChild(this.box);
        }
    }
    setSpeed(speed){
        if(speed < 0){
            throw "speed too low/negative";
        }
        else{
            this.speed = speed;
        }
    }
    setMotion(){   
        
        var getElem = document.getElementById(this.signiture);
        var pos = 0; 
        var id = setInterval(frame, this.speed);
        function frame(){
            if(pos < 770){
                pos++;
                getElem.style.top = pos + "px";
                getElem.style.left = pos + "px";
            }
            if(pos === 770){
                pos--;
                getElem.style.top = pos + "px";
                getElem.style.left = pos + "px";
            }
            /* else if(pos === 770){
                clearInterval(id);
            } */
        }

    }
}

/* class GameBar{
    constructor(width,side)
} */