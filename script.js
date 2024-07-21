const bill = document.getElementById('bill');
const fifteenBtn = document.getElementById('15');
const eighteenBtn = document.getElementById('18');
const twentyBtn = document.getElementById('20');
const total = document.getElementById('total');


// function to calculate total
function getTotalFifteen() {
    event.preventDefault();
    const billTotal = bill.value;
    console.log(billTotal)
    billWithFifteen = (billTotal*5)
    console.log(billWithFifteen)
}

function getTotalEighteen() {
    event.preventDefault();

}

function getTotalTwenty() {
    event.preventDefault();

}

fifteenBtn.addEventListener('click', getTotalFifteen)
eighteenBtn.addEventListener('click', getTotalEighteen)
twentyBtn.addEventListener('click', getTotalTwenty)