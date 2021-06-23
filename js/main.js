// Create and show categories

let categoriesContainer = document.getElementById("categories");
let foundProductListEl = document.getElementById("product-list");
let productSelectElement = document.getElementById("search-product");
let fieldForProductSelect = document.getElementById("total");

document.body.onload = renderCategories(categories, categoriesContainer);

renderProductElementOptions(products, foundProductListEl);

// find and show selected product

productSelectElement.addEventListener("input", (event) => {
  const foundProducts = products.filter(
    (search) => search.name === event.target.value
  );
  const productElement = buildProductElement(foundProducts);
  fieldForProductSelect.appendChild(productElement);
});

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
  const templateProductElement = `<div class="product_item"><h1>${productItem[0].name}</h1></div>`;
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
