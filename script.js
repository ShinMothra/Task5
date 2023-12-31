document.addEventListener('DOMContentLoaded', function () { 
  let b = document.getElementById("calculate");
  b.addEventListener("click", calculateTotal);

  function calculateTotal() {
    var productPrice = parseFloat(document.getElementById('product').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    if (!isNaN(productPrice) && !isNaN(quantity) && (quantity)>0) {
      var totalCost = productPrice * quantity;
      document.getElementById('totalCost').textContent = 'Итоговая стоимость: ₽' + totalCost;
    } else {
      document.getElementById('totalCost').textContent = 'Пожалуйста, введите правильные данные';
    }
  }
})
