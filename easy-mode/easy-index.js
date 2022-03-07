let generateNewColorButton = document.querySelector(".generate-new-color");
let rgbColorDiv = document.querySelector(".rgb-color");
let middleContainer = document.querySelector(".middle-container");

easyboxes = [];
easyboxes.push(document.querySelector("#eb1"));
easyboxes.push(document.querySelector("#eb2"));
easyboxes.push(document.querySelector("#eb3"));

generateNewColorButton.addEventListener("click", changeColor);
for(let i=0;i<easyboxes.length;++i){
    easyboxes[i].addEventListener("click", check);
}

function showAllBoxes(){
    for(let i=0;i<easyboxes.length;++i){
        let ourBox = easyboxes[i];
        ourBox.classList.remove("hide");
    }
}

function changeColor(){
    showAllBoxes();

    middleContainer.innerText="Choose the Box corresponding to the given RGB code.";

    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    let text = "rgb("+r+", "+g+", "+b+")";
    rgbColorDiv.innerText= text;
    let colorOfBoxes = [[r,g,b]];
    for(let i=1;i<easyboxes.length;++i){
        let tempr= Math.floor(Math.random()*256);
        let tempg= Math.floor(Math.random()*256);
        let tempb= Math.floor(Math.random()*256); 
        colorOfBoxes.push([tempr, tempg, tempb]);
    }
    for(let i=colorOfBoxes.length-1;i>0;--i){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = colorOfBoxes[i];
        colorOfBoxes[i] = colorOfBoxes[j];
        colorOfBoxes[j] = temp;
    }
    // console.log(colorOfBoxes);
    // console.log(easyboxes);
    for(let i=0;i<easyboxes.length;++i){
        let ourBox = easyboxes[i];
        let colorOfBox = colorOfBoxes[i];
        ourBox.style.backgroundColor= "rgb("+colorOfBox[0]+", "+colorOfBox[1]+", "+colorOfBox[2]+")";
    }
}

function check(){
    let originalColor = rgbColorDiv.innerText;
    let clickedColor = this.style.backgroundColor;
    // console.log(clickedColor);
    if(originalColor==clickedColor && originalColor!=""){
        // console.log("You won");
        for(let i=0;i<easyboxes.length;++i){
            let ourBox = easyboxes[i];
            ourBox.style.backgroundColor= originalColor;
            showAllBoxes();
        }
        middleContainer.innerText = "Bravo, You won!";
    }
    else if(originalColor!=""){
        // console.log("Try Again");
        middleContainer.innerHTML = "Try Again!";
        this.classList.add("hide");
    }
}