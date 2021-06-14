const categories = [
  {
    id: 1,
    name: 'Грибы',
    imageUrl: 'https://supercalorizator.ru/instruments/calorizator/images/menu/1.png',
    description:
      'Список грибов с данными об их энергетической ценности, содержании белков, жиров и углеводов. Калорийность грибов указана в левой нижней части каждого пункта таблицы под надписью "Ккал".',
    productIds: [1, 2, 3, 7]
  },
  {
    id: 2,
    name: 'Фрукты',
    imageUrl: 'https://supercalorizator.ru/instruments/calorizator/images/menu/1.png',
    description: 'Список фруктов',
    productIds: [4, 5, 6, 7]
  }
];

const products = [
  {
    id: 1,
    name: 'Сморчки свежие',
    imageUrl: 'https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg',
    categoryIds: [1],
    proteins: 1.7,
    fats: 0.3,
    carbohydrates: 4.2,
    kcal: 27
  },
  {
    id: 2,
    name: 'Арбуз',
    imageUrl: 'https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg',
    categoryIds: [2],
    proteins: 0.7,
    fats: 0.2,
    carbohydrates: 3.2,
    kcal: 25
  }
];

const basket = [
  {
    productId: 1,
    weight: 300 // в граммах
  },
  {
    productId: 3,
    weight: 100 // в граммах
  }
];

// Create and show categories 

let categoriesConteiner = document.getElementById("categories");
let searchProduct = document.getElementById("product-list");
   
function  showCategoties( wrapperElem) {
  for (let i = 0; i < categories.length; i++) {
    const fieldForCategoryItem = document.createElement("div");
    const categoryItemTitle = document.createElement("h2");
    const categoryItemImage = document.createElement("img");
    const categoryItemDescription = document.createElement("p");

    categoryItemTitle.innerHTML = categories[i].name;
    categoryItemImage.setAttribute("src", categories[i].imageUrl);
    categoryItemDescription.innerHTML = categories[i].description;

    fieldForCategoryItem.append(categoryItemTitle, categoryItemImage, categoryItemDescription);
    fieldForCategoryItem.className = "categories_item";

    // fieldForCategoryItem.innerHTML =
    // categories[i].name + " " + categories[i].imageUrl + " " + categories[i].description;
    wrapperElem.append(fieldForCategoryItem);
  }
}

function createProductElementOption(product) {
  for (let i = 0; i < products.length; i++) {
    const optionProductElement = document.createElement('option');
    optionProductElement.value = product[i].name;
    optionProductElement.innerHTML = product[i].name;
    searchProduct.appendChild(optionProductElement);
  }
}

document.body.onload = showCategoties(categoriesConteiner);

createProductElementOption (products);