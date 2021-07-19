// find and show selected product

let foundProduct = {};
let totalWeight = null;
let sumKcalProduct = null;
let totalKkal = null;

productSelectElement.addEventListener("input", (event) => {
  foundProduct = products.find(
    (product) => product.name === event.target.value
  );
  if (foundProduct) {
    productElement.className = "active";
    nameProductElement.textContent = foundProduct.name;
    imageProductElement.src = foundProduct.imageUrl;
    kcalProductElement.textContent = foundProduct.kcal;
    proteinsProductElement.textContent = foundProduct.proteins;
    fatsProductElement.textContent = foundProduct.fats;
    carbohydratesProductElement.textContent = foundProduct.carbohydrates;
    updateThis(productSelectElement, null);
  }
});

weightProductSelectElement.addEventListener("input", (event) => {
  const productElementWeight = event.target.value / 100;
  sumKcalProduct = productElementWeight * foundProduct.kcal;
  let sumProteinsProduct = productElementWeight * foundProduct.proteins;
  let sumFatsProduct = productElementWeight * foundProduct.fats;
  let sumCarbohydratesProduct =
    productElementWeight * foundProduct.carbohydrates;
  kcalProductElement.textContent = sumKcalProduct.toFixed(2);
  proteinsProductElement.textContent = sumProteinsProduct.toFixed(2);
  fatsProductElement.textContent = sumFatsProduct.toFixed(2);
  carbohydratesProductElement.textContent = sumCarbohydratesProduct.toFixed(2);
});

// function findTotaQuantity (totalQuantity, calculatedParameter, wrapperResult) {
//   totalQuantity += calculatedParameter;
//   wrapperResult.textContent = totalQuantity;
//   return totalKkal;
// }

addProduct.addEventListener("click", function () {
  totalKkal += sumKcalProduct;
  totalResult.textContent = totalKkal + " " + "Kkal";
  return totalKkal;
});

function updateThis(target, data) {
  target.value = data;
}
nameProductElement.addEventListener("click", function () {
  productElement.classList.remove("active");
  updateThis(weightProductSelectElement, 100);
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
