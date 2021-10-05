let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imags/高子豪.jpg') {
      myImage.setAttribute('src', 'imags/h.jpg');
    } else {
      myImage.setAttribute('src', 'imags/高子豪.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = ' 酷毙了，' + myName;
  }
}

myButton.onclick = function() {
   setUserName();
}