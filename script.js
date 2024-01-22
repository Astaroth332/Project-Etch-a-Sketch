const container = document.querySelector('#container');
const FIXED_GRID_NUMBER = 16;

let randomColorGenerator = () => {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16)
    randomColor = randomColor.padStart(6, '0');
    return randomColor;
}

console.log(randomColorGenerator());

function newGrid(gridItem) {
    container.innerHTML = "";

for (let i = 0; i < gridItem; i++){
    const rowOfSquareItem = document.createElement('div');
    rowOfSquareItem.classList.add('row-of-square-item');
    container.appendChild(rowOfSquareItem);
    for(let j = 0; j < gridItem; j++) {
        const colOfSquareItem = document.createElement('div');
        colOfSquareItem.classList.add('col-of-square-item');
        rowOfSquareItem.appendChild(colOfSquareItem);
    } 
}

const items = document.querySelectorAll('.col-of-square-item');
items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `#${randomColorGenerator()}`;
        });
    });
}

newGrid(FIXED_GRID_NUMBER);

const btnForChangeGrid = document.querySelector('#btn-change-grid');
let squaredNumber = 0;


btnForChangeGrid.addEventListener('click', () => {
    alert('Maximum is 100')
     squaredNumber = prompt("Enter the square number", 16);

    if (squaredNumber == null || isNaN(squaredNumber) || squaredNumber < 2 || squaredNumber > 100) {
        newGrid(FIXED_GRID_NUMBER);
        return;
    }

    newGrid(squaredNumber);

})


const btnForClear = document.querySelector('#btn-clear');

btnForClear.addEventListener('click', () => {
    const clearColoredGrid = document.querySelectorAll('.col-of-square-item');
    if (squaredNumber === 0 || squaredNumber === null || isNaN(squaredNumber) || squaredNumber < 2 || squaredNumber > 100) {
        newGrid(FIXED_GRID_NUMBER);
        return;
    }

    newGrid(squaredNumber);
    clearColoredGrid.forEach((item) => {
        item.style.backgroundColor = "";
    });
})


const btnForErase = document.querySelector('#btn-erase');
let isEraseActive = false;

btnForErase.addEventListener('click', () => {
    enableErase()
    changeButtonColor()
});


function enableErase() {
    const eraseColoredGrid = document.querySelectorAll('.col-of-square-item');

    if (isEraseActive) {
        eraseColoredGrid.forEach((item) => {
            item.addEventListener('mouseover', ()=> {
                item.style.backgroundColor = `#${randomColorGenerator()}`;
            });
        });


    } else {
        eraseColoredGrid.forEach((item) => {
            item.addEventListener('mouseover', ()=> {
                item.style.backgroundColor = '';
            });
        }) ;
    }

    isEraseActive = !isEraseActive;
}

function changeButtonColor() {
    let btn = document.querySelector('.toggleButton');
    btn.classList.toggle('active');
}