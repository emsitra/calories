// Create and show categories

let categoriesContainer = document.getElementById("categories");
let foundProductListEl = document.getElementById("product-list");
let productSelectElement = document.getElementById("search-product");
let fieldForProductSelect = document.getElementById("total");
let productElement = document.getElementById("product-popup");
let nameProductElement = document.getElementById("product-popup_name");
let imageProductElement = document.querySelector(".product-popup_img");
let kcalProductElement = document.getElementById("kcal");
let proteinsProductElement = document.getElementById("proteins");
let fatsProductElement = document.getElementById("fats");
let carbohydratesProductElement = document.getElementById("carbohydrates");
let weightProductSelectElement = document.getElementById("product-weight");
let addProductBtn = document.querySelector("#add-product");
let totalResult = document.getElementById("total");


document.body.onload = init;

function init() {
  renderCategories(categories, categoriesContainer);
  renderProductElementOptions(products, foundProductListEl);
}
