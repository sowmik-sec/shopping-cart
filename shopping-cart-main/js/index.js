function priceCalc(itemNum, item) {
  if (item[0] == "p") {
    document.getElementById("phone-price").innerText = itemNum * 1219;
  } else {
    document.getElementById("case-price").innerText = itemNum * 59;
  }
  let numOfPhone = parseInt(document.getElementById("phone-count").value);
  let numOfCase = parseInt(document.getElementById("case-count").value);
  let totalPrice = numOfPhone * 1219 + numOfCase * 59;
  document.getElementById("sub-total").innerText = totalPrice;
  document.getElementById("total").innerText = totalPrice;
}

document.getElementById("remove-phone").addEventListener("click", function () {
  document.getElementById("iphone").style.display = "none";
  document.getElementById("phone-count").value = 0;
  priceCalc(0, "phone-count");
});
document.getElementById("remove-case").addEventListener("click", function () {
  document.getElementById("case").style.display = "none";
  document.getElementById("case-count").value = 0;
  priceCalc(0, "case-count");
});

function addItem(itemId, item) {
  document.getElementById(itemId).addEventListener("click", function () {
    const curItemNum = document.getElementById(item);
    const curNum = parseInt(curItemNum.value) + 1;
    curItemNum.value = curNum;
    priceCalc(curNum, item);
  });
}
function removeItem(itemId, item) {
  document.getElementById(itemId).addEventListener("click", function () {
    let curItemNumString = document.getElementById(item);
    let curItemNum = parseInt(curItemNumString.value);
    if (curItemNum > 1) {
      curItemNum--;
      curItemNumString.value = curItemNum;
      priceCalc(curItemNum, item);
    }
  });
}

addItem("phone-plus", "phone-count");

addItem("case-plus", "case-count");

removeItem("phone-minus", "phone-count");

removeItem("case-minus", "case-count");
