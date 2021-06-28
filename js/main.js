// Create and show categories

let categoriesContainer = document.getElementById("categories");
let foundProductListEl = document.getElementById("product-list");
let productSelectElement = document.getElementById("search-product");
let fieldForProductSelect = document.getElementById("total");
let productElement = document.getElementById("product-popup");
let nameProductElement = document.getElementById("product-popup_name");
let imageProductElement = document.getElementById("product-popup_img");
let kcalProductElement = document.getElementById("kcal");
let proteinsProductElement = document.getElementById("proteins");
let fatsProductElement = document.getElementById("fats");
let carbohydratesProductElement = document.getElementById("carbohydrates");
let weightProductSelectElement = document.getElementById("product-weight");


document.body.onload = renderCategories(categories, categoriesContainer);

renderProductElementOptions(products, foundProductListEl);

// find and show selected product
productSelectElement.addEventListener('input', (event) => {
  const foundProduct = products.find((product) => product.name === event.target.value);
  if (foundProduct) {
    productElement.className = "active";
    nameProductElement.textContent = foundProduct.name;
    imageProductElement.src = foundProduct.imageUrl;
    kcalProductElement.textContent = foundProduct.kcal;
    proteinsProductElement.textContent = foundProduct.proteins;
    fatsProductElement.textContent = foundProduct.fats;
    carbohydratesProductElement.textContent = foundProduct.carbohydrates;
  }

  weightProductSelectElement.addEventListener('input', (event) => {
    const productElementWeight = event.target.value/100;
    const sumKcalProductElement = productElementWeight*foundProduct.kcal; 
    const sumProteinsProductElement = productElementWeight*foundProduct.proteins; 
    const sumFatsProductElement = productElementWeight*foundProduct.fats;
    const sumCarbohydratesProductElement = productElementWeight*foundProduct.carbohydrates;
    kcalProductElement.textContent =  sumKcalProductElement;  
    proteinsProductElement.textContent = sumProteinsProductElement;
    fatsProductElement.textContent = sumFatsProductElement;
    carbohydratesProductElement.textContent = sumCarbohydratesProductElement;
  })
});



nameProductElement.addEventListener('onclick', function () {
  productElement.classList.remove("active");
})

// productSelectElement.addEventListener('input', (event) => {
//   const foundProduct = products.find((product) => product.name === event.target.value);
//   if (foundProduct) {
//     const productElement = buildProductElement(foundProduct);
//     fieldForProductSelect.appendChild(productElement);
//   }
// });

// productSelectElement.addEventListener("input", (event) => {
//   const foundProducts = products.filter(
//     (search) => search.name === event.target.value
//   );
//   const productElement = buildProductElement(foundProducts);
//   fieldForProductSelect.appendChild(productElement);
// });

//create product list
// function createProductElementOption(product) {
//     for (let i = 0; i < products.length; i++) {
//       const optionProductElement = document.createElement("option");
//       optionProductElement.value = product[i].name;
//       optionProductElement.innerHTML = product[i].name;
//       foundProductListEl.appendChild(optionProductElement);
//     }
//   }

function buildProductElementOption(product) {
  const optionProductElement = document.createElement("option");
  optionProductElement.value = product.name;
  optionProductElement.innerHTML = product.name;

  return optionProductElement;
}

function buildCategoryElement(categoryItem) {
  const wrapperCatagoryElement = document.createElement(`div`);
  const templateCategoryElement = `<div class="categories_item"><h1>${categoryItem.name}</h1><img src="${categoryItem.imageUrl}"/><p>${categoryItem.description}</p></div>`;
  wrapperCatagoryElement.innerHTML = templateCategoryElement;
  return wrapperCatagoryElement;
}

function buildProductElement(productItem) {
  const wrapperProductElement = document.createElement("div");
  const templateProductElement = `<div class="product_item"><h1>${productItem.name}</h1></div>`;
  wrapperProductElement.innerHTML = templateProductElement;
  return wrapperProductElement;
}

function renderCategories(categories, categoiesWrapper) {
  categories.forEach((category) => {
    const categoryElement = buildCategoryElement(category);
    categoiesWrapper.appendChild(categoryElement);
  });
}

function renderProductElementOptions(products, productsWrapper) {
  products.forEach((product) => {
    const productOptionElement = buildProductElementOption(product);
    productsWrapper.appendChild(productOptionElement);
  });
}
