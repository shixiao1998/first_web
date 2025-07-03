const myImage = document.querySelector('img');
myImage.onclick = function () {
    if (myImage.getAttribute("src") === "testimg.png") 
        myImage.src= "img2.jpeg";
    else 
       myImage.src= "testimg.png";
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    alert("You must enter a name.");
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}



if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
