let sortType;
let arrayNumbers = [];

window.onload = setNumbersArray(50);


function setSortType(sort){
    sortType = sort;
    alert(sortType)
}


function setNumbersArray(quantity){
    for (let i = 0; i < quantity; i++) {
        arrayNumbers.push(Math.floor(Math.random() * 5000))    
    }
    alert(arrayNumbers)
    
}
