"use strict";
const numbersBtn = document.querySelectorAll('#numberBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const clearBtn = document.querySelector('#clearBtn');
const lastDisplay = document.querySelector('.last-display');
const currentDisplay = document.querySelector('.current-display');
let currentDisplayNum = +'';

const equalsBtn = document.querySelector('#equals');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const decimalBtn = document.querySelector('#decimal');

numbersBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (lastDisplay.textContent.length < 15) {
            lastDisplay.textContent += button.textContent;
        }
    });
});
deleteBtn.addEventListener('click', () => deleteBtnFunction(lastDisplay));
clearBtn.addEventListener('click', () => clearBtnFunction(lastDisplay, currentDisplay));

const clearBtnFunction = (item1, item2) => {
    item1.textContent = '';
    item2.textContent = '';

};

const deleteBtnFunction = item => {
    if (item.textContent.length === 1) {
        item.textContent = '';
    } else if (item.textContent.length > 1) {
        item.textContent = item.textContent.slice(0, -1);
    }
};

//equals
equalsBtn.addEventListener('click', () => {
    currentDisplay.textContent += +lastDisplay.textContent.slice(0, lastDisplay.textContent.length);
    let num = currentDisplay.textContent.slice(0, currentDisplay.textContent.length);
    lastDisplay.textContent = eval(num);
    currentDisplay.textContent = '';
});

//Add Button
addBtn.addEventListener('click', () => {
    if(lastDisplay.textContent){
        currentDisplay.textContent += +lastDisplay.textContent.slice(0, lastDisplay.textContent.length) + '+';
        lastDisplay.textContent = '';
    } 
});
subtractBtn.addEventListener('click', () => {
    if(lastDisplay.textContent){
        currentDisplay.textContent += +lastDisplay.textContent.slice(0, lastDisplay.textContent.length) + '-';
        lastDisplay.textContent = '';
    }
});
multiplyBtn.addEventListener('click', () => {
    if(lastDisplay.textContent){
        currentDisplay.textContent += +lastDisplay.textContent.slice(0, lastDisplay.textContent.length) + '*';
        lastDisplay.textContent = '';
    }
});
divideBtn.addEventListener('click', () => {
    if(lastDisplay.textContent){
        currentDisplay.textContent += +lastDisplay.textContent.slice(0, lastDisplay.textContent.length) + '/';
        lastDisplay.textContent = '';
    }
});
decimalBtn.addEventListener('click', () => {
    if(lastDisplay.textContent ){
        lastDisplay.textContent += '.';
    }
});

const parentObj = document.querySelector('.container-parent');
function waitUntilCodeEntered() {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (lastDisplay.textContent == "0963159265") {
            lastDisplay.textContent = '✈️✈️✈️';
            parentObj.style.pointerEvents = 'none';
          clearInterval(intervalId);
          resolve();
        }
      }, 100);
    });
  }
  
  async function startAnimation() {
    await waitUntilCodeEntered();
    let rotation = 0;
    setInterval(() => {
      rotation += 0.4;
      parentObj.style.transform = `rotate(${rotation}deg)`;
    }, 5);
  }
  
  startAnimation();