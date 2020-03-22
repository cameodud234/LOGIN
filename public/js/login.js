// This is missing some essential characters.
const specialChar = "!@#$%^&*()_+-{}[]|<>?,./:;'~` ";

const lcLetter = "abcdefghijklmnopqrstuvwxyz";

const ucLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "123456789";


// Expand on this please with Ajax
const stateList = {
    "USA":["New York","California","Florida","Alabama"],
    "Canada":["Quebec", "Ontario", "Manitoba", "British Columbia"]
};

window.addEventListener("load", START);
//window.setInterval(imgMotion, 17);


// function to load on starting the webpage
function START(e){

    const countryElem = document.getElementById("country");
    const stateElem = document.getElementById("state");
    const userElem = document.getElementById("user");
    const pwElem = document.getElementById("pw");
    const checkElem = document.getElementById("T_F");
    const buttonSub = document.getElementById("formSub");
    const userP = document.getElementById("uN");
    const pwP = document.getElementById("pN");
    const divBox = document.getElementById("myImage");
    const uNText = "Username";
    const pWText = "Password";
    const selectTxt = "select";


    // True values
    var countryCheck = false;
    var stateCheck = false;
    var userTruth = false;
    var pwTruth = false;


    // disable button
    buttonSub.disabled = true;

    countryElem.addEventListener("change", function(){
        if(countryElem.value){
            console.log("country selected: " + countryElem.value);
            deleteNodesOf(stateElem);
            var node = document.createElement("option");
            text = document.createTextNode(selectTxt);
            node.appendChild(text);
            node.value = "";
            stateElem.appendChild(node);
                for(var key in stateList){
                    var size = stateList[key].length;
                    if(countryElem.value === key){
                        for(var i = 0; i < size; i++){
                            var valAt = stateList[key];
                            let node = document.createElement("option");
                            let text = document.createTextNode(valAt[i]);
                            node.appendChild(text);
                            stateElem.appendChild(node);
                        }
                    }
                }
                countryCheck = true;
            }
        else{
            deleteNodesOf(stateElem);
            countryCheck = false;
        }

    });

    stateElem.addEventListener("change", function(){
        if(stateElem){
            stateCheck = true;
            console.log(stateElem.value);
        }
        else{
            stateCheck = false;
        }
    });

    userElem.addEventListener("focus", function(){
        if( userElem.value == uNText){
            userElem.value = "";
        }
    });
    userElem.addEventListener("blur", function(){
        if(!userElem.value){
            userElem.value = uNText;
            userTruth = false;
            userP.style.backgroundColor = document.body.style.backgroundColor;
        }

        else{
            var x = userCheck(userElem.value);
            console.log("userVal good:",x);
            if(x){
                userTruth = true;
                userP.style.backgroundColor = document.body.style.backgroundColor;
            }
            else{
                userTruth = false;
                userP.style.backgroundColor = "red";
            }
        }

    });

    pwElem.addEventListener("focus", function(){
        if(pwElem.value === pWText){
            pwElem.value = "";
        }
    });

    pwElem.addEventListener("blur", function(){
        if(!pwElem.value){
            pwElem.value = pWText;
            pwTruth = false;
            pwP.style.backgroundColor = document.body.style.backgroundColor;
        }
        else{
            var x = pwCheck(pwElem.value, userElem.value);
                if(x && (!pwElem.value.includes(userElem.value))){
                    pwTruth = true;
                    pwP.style.backgroundColor = document.body.style.backgroundColor;
                }
                else{
                    pwTruth = false;
                    pwP.style.backgroundColor = "red";
                }
            }
    });

    checkElem.addEventListener("click",function(){
        if(checkElem.checked){
            // This is where we will change the action of the button
            if( (countryCheck === true) && (stateCheck === true) &&
            (userTruth = true) && (pwTruth === true) ){
                buttonSub.disabled = false;
            }
        }
        else{
            buttonSub.disabled = true;
        }
    });


}



// function to delete child nodes of parent tag
function deleteNodesOf(parent){
    while(parent.childNodes.length){
        parent.removeChild(parent.childNodes[0]);
    }
}

// function checks if usename is good
function userCheck(val){
    var userLength = val.length;
    var truther = false;
    if(userLength > 2 && userLength <= 15){
        for(var i = 0; i < lcLetter.length; i++){
            if(val[0] === lcLetter[i] || val[0] === ucLetter[i]){
                truther = true;
            }
        }
        for(var i = 0; i < userLength; i++){
            for(var j = 0; j < specialChar.length; j++){
                if (val[i] === specialChar[j]) {
                    truther = false;
                    break;
                }
            }
        }
    }
  return truther;
}

// function checks if pw is good
// THis function can be optimized
// We can stop the if statements in the loops.
function pwCheck(val, userVal){
    var truther = false;
    var pwLength = val.length;
    var specLength = specialChar.length;
    var ucLength = ucLetter.length; // ucLength === lcLength
    var specCount = 0;
    var ucCount = 0;
    var lcCount = 0;

    if(pwLength > 8 && pwLength <= 16){
        for(var i = 0; i < pwLength; i++){

            for(var j = 0; j < specLength; j++){
                if(val[i] === specialChar[j]){
                    ++specCount;
                }
                if(j < ucLetter.length){
                    if(val[i] === ucLetter[j]){
                        ++ucCount;
                    }
                    else if(val[i] === lcLetter[j]){
                        ++lcCount;
                    }
                }
                if((specCount > 0) && (ucCount > 0) && (lcCount > 0)){
                    truther = true;
                    break;
                }
            }
        }

    }
    return truther;
}

/*
var dx = 0;
var dy = 0;
function imgMotion(){
  var image = document.getElementById("myImage");
  var x = 0;
  var y = 0;
  dx += x + 1;
  dy += y + 1;

  image.style.top = dy + "px";
  image.style.left = dx + "px";
  console.log("This is a message");
}
*/
