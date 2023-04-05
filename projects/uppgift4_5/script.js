let element = document.getElementById("counter");
// get number from localStorage and if there is no value assigned to number, set it to 0
let number = localStorage.getItem("number") ? localStorage.getItem("number") : 0;
// set element to number upon initilization
element.innerHTML = number;

// store number in localStorage
function storeNumber() {
    localStorage.setItem("number", number);
}

// increase number by 1 and update the element and store it to localStorage
function addNumber() { 
    number = parseInt(element.innerText)
    number++;
    element.innerHTML = number;
    storeNumber();
}

// set number to zero and update the element and store it to localStorage
function resetNumber() {
    number = 0;
    element.innerHTML = number;
    storeNumber();
}

