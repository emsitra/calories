// find and show selected product

let foundProduct = {};
let kcalProduct = 0;
let totalKcal = 0;

productSelectElement.addEventListener("input", (event) => {
  foundProduct = products.find(
    (product) => product.name === event.target.value
  );
  if (foundProduct) {
    buildPopupProductElement(foundProduct);
  }  
});

weightProductSelectElement.addEventListener("input", (event) => {
  const productWeight = event.target.value / 100;
  const { proteins, fats, carbohydrates, kcal } = calculateNutrientsWeight(productWeight, foundProduct);
  kcalProduct = kcal;
  kcalProductElement.textContent = kcal.toFixed(2);  
  proteinsProductElement.textContent = proteins.toFixed(2);
  fatsProductElement.textContent = fats.toFixed(2);
  carbohydratesProductElement.textContent = carbohydrates.toFixed(2);  
  console.log (kcalProduct)
  
});

// function findTotaQuantity (totalQuantity, calculatedParameter, wrapperResult) {
//   totalQuantity += calculatedParameter;
//   wrapperResult.textContent = totalQuantity;
//   return totalKkal;
// }
console.log (kcalProduct)
// add to basket kkal
addProductBtn.addEventListener("click", function () {
  totalKcal += kcalProduct;
  totalResult.textContent = `${totalKcal} Kkal`;
  return totalKcal;
  });



// update weight of choosed product 
function updateThis(target, data) {
  target.value = data;
}
nameProductElement.addEventListener("click", function () {
  productElement.classList.remove("active");
  updateThis(weightProductSelectElement, null);
});

function buildProductElementOption(product) {
  const optionProductElement = document.createElement("option");
  optionProductElement.value = product.name;
  optionProductElement.innerHTML = product.name;
  return optionProductElement;
}

function buildProductElement(productItem) {
  const wrapperProductElement = document.createElement("div");
  const templateProductElement = `<div class="product_item"><h1>${productItem.name}</h1></div>`;
  wrapperProductElement.innerHTML = templateProductElement;
  return wrapperProductElement;
}

function renderProductElementOptions(products, productsWrapper) {
  products.forEach((product) => {
    const productOptionElement = buildProductElementOption(product);
    productsWrapper.appendChild(productOptionElement);
  });
}
function buildPopupProductElement(product) {  
    productElement.className = "active";
    nameProductElement.textContent = product.name;
    imageProductElement.src = product.imageUrl;
    kcalProductElement.textContent = product.kcal;
    proteinsProductElement.textContent = product.proteins;
    fatsProductElement.textContent = product.fats;
    carbohydratesProductElement.textContent = product.carbohydrates;
    updateThis(productSelectElement, null);
}

function calculateNutrientsWeight(weight, product) {
  return {
     proteins: weight * product.proteins,
     fats: weight * product.fats,
     carbohydrates: weight * product.carbohydrates,
     kcal: weight * product.kcal,
  }
}