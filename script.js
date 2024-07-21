const bill = document.getElementById("bill");
const fifteenBtn = document.getElementById("15");
const eighteenBtn = document.getElementById("18");
const twentyBtn = document.getElementById("20");
const total = document.getElementById("total");
const tip = document.getElementById("tip");


function getTotalFifteen() {
  event.preventDefault();
  const billValue = bill.value;
  const billTotal = Number.parseFloat(billValue);
  billWithFifteen = billTotal * 0.15;
  console.log(billWithFifteen);

  tip.textContent = '$' + billWithFifteen.toFixed(2);
  const bill15Total = (billWithFifteen += billTotal);
  console.log(bill15Total);

  total.textContent = '$' + bill15Total.toFixed(2);
}

function getTotalEighteen() {
  event.preventDefault();
  const billValue = bill.value;
  const billTotal = Number.parseFloat(billValue);
  billWithEighteen = billTotal * 0.18;

  tip.textContent = '$' + billWithEighteen.toFixed(2);
  const bill18Total = (billWithEighteen += billTotal);
  total.textContent = '$' + bill18Total.toFixed(2);
}

function getTotalTwenty() {
  event.preventDefault();
  const billValue = bill.value;
  const billTotal = Number.parseFloat(billValue);
  billWithTwenty = billTotal * 0.2;
  tip.textContent = '$' + billWithTwenty.toFixed(2);
  const bill20Total = (billWithTwenty += billTotal);
  total.textContent = '$' + bill20Total.toFixed(2);
}

fifteenBtn.addEventListener("click", getTotalFifteen);
eighteenBtn.addEventListener("click", getTotalEighteen);
twentyBtn.addEventListener("click", getTotalTwenty);
