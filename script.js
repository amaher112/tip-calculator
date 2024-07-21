const bill = document.getElementById('bill');
const fifteenBtn = document.getElementById('15');
const eighteenBtn = document.getElementById('18');
const twentyBtn = document.getElementById('20');
const total = document.getElementById('total');
const tip = document.getElementById('tip');


// function to calculate total
function getTotalFifteen() {
    event.preventDefault();
    const billValue = bill.value;
    const billTotal = Number.parseFloat(billValue)
    billWithFifteen = (billTotal*.15)
    console.log(billWithFifteen)
tip.textContent = billWithFifteen
    const bill15Total = (billWithFifteen+=billTotal)
    console.log(bill15Total)
    total.textContent = bill15Total;
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