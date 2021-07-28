// find and show selected product
let foundProduct = {};
let kcalProduct = 0;
let totalKcal = 0;
let productWeight = 0;

productSelectElement.addEventListener("input", (event) => {
  foundProduct = products.find(
    (product) => product.name === event.target.value
  );
  console.log(foundProduct);
  if (foundProduct) {
    buildPopupProductElement(foundProduct);
  }
});

weightProductSelectElement.addEventListener("input", (event) => {
   productWeight = event.target.value;
   const { proteins, fats, carbohydrates, kcal} = calculateNutrientsWeight(productWeight,foundProduct);
  kcalProduct = kcal;
  updateNutrientsValue (kcal, proteins, fats, carbohydrates);  
});    

addProductBtn.addEventListener("click", () => {
  addProductToBasket (foundProduct, productWeight);
  showProductItemAtBasket ();
  caclBasketTotalValue ();  
  removeProductFromBasket ();
  
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
    fats: weight * product.fats/100,
    carbohydrates: weight * product.carbohydrates/100,
    kcal: weight * product.kcal/100,
  };
}

function updateNutrientsValue (kcal, proteins, fats, carbohydrates) {
  kcalProductElement.textContent = kcal.toFixed(2);
  proteinsProductElement.textContent = proteins.toFixed(2);
  fatsProductElement.textContent = fats.toFixed(2);
  carbohydratesProductElement.textContent = carbohydrates.toFixed(2);
}

function addProductToBasket (productSelected, productWeight) {
 return  basket.push({
    productId: productSelected.id,
    productName: productSelected.name,
    image: productSelected.imageUrl,
    weight: productWeight, // в граммах
    kcal: kcalProduct,
    proteins:productSelected.proteins,
    fats: productSelected.fats,
    carbohydrates: productSelected.carbohydrates,
  });

}
function showProductItemAtBasket (basketWrapper) {
  basketWrapper = document.querySelector("#total");
  basketWrapper.insertAdjacentHTML('afterend', `     
           <div class = "basket-item">
           <div>
           <img style = "width: 50px; height: 50px" src="${basket[0].image}" alt="">
           <p>${basket[0].productName}</p>  
           </div>
    <ul>
      <li style = "margin-bottom: 5px;">
       Ккал  ${kcalProduct}         
      </li>
      <li>
      <a href="#">Вес ${basket[0].weight}</a
      </li>
    </ul>
 </div>`)
}

function caclBasketTotalValue () {
  totalKcal += kcalProduct;
  totalResult.textContent = `${totalKcal} kcal`;
  return totalKcal; 
}
function removeProductFromBasket (delProductItem) {
    delProductItem = document.querySelector('.basket-item');
    delProductItem.addEventListener("click",  () => {
    delProductItem.classList.add('active');
    totalKcal = totalKcal - basket[0].kcal; 
    return totalKcal;
});
}