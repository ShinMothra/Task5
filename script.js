function calculateCost() {
  let selectElement = document.getElementById('ProductList');
  let product = selectElement.value;
  var quantity = parseInt(document.getElementById("quantity").value);
  var totalCost = quantity * product;
  let s=document.getElementById("result").textContent = "Общая стоимость заказа: $" + totalCost;
  console.log(s[0].value);
  return false;
}