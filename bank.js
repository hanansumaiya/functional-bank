function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldInText = inputField.value;
  const inputFieldValue = parseFloat(inputFieldInText);
  inputField.value = "";
  return inputFieldValue;
}
function getInnerText(fieldID) {
  const textInner = document.getElementById(fieldID);
  const textInnerInText = textInner.innerText;
  const textInnerTotal = parseFloat(textInnerInText);
  return textInnerTotal;
}
function updateValue(fieldId, amount) {
  //   const totalField = document.getElementById(fieldId);
  //   const totalFieldInText = totalField.innerText;
  //   const prevTotalField = parseFloat(totalFieldInText);
  const prevTotalField = getInnerText(fieldId);
  const newTotalField = prevTotalField + amount;
  document.getElementById(fieldId).innerText = newTotalField;
}
function updateBalance(amount) {
  //   const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalInText = balanceTotal.innerText;
  //   const prevbalanceTotal = parseFloat(balanceTotalInText);
  const prevbalanceTotal = getInnerText("balance-total");
  const newbalanceTotal = prevbalanceTotal - amount;
  document.getElementById("balance-total").innerText = newbalanceTotal;
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  let amount = getInputValue("deposit-input");
  if (amount > 0) {
    updateValue("deposit-total", amount);
    updateBalance(amount);
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let amount = getInputValue("withdraw-input");
  if (amount > 0) {
    updateValue("withdraw-total", amount);
    updateBalance(amount);
  }
});
