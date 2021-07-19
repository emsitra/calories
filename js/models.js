const categories = [
  {
    id: 1,
    name: "Грибы",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/menu/1.png",
    description:
      'Список грибов',
    productIds: [1, 2, 3, 7],
  },
  {
    id: 2,
    name: "Фрукты",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/menu/1.png",
    description: "Список фруктов",
    productIds: [4, 5, 6, 7],
  },
  {
    id: 3,
    name: "Крупы",
    imageUrl:
      " https://supercalorizator.ru/instruments/calorizator/images/products/224.jpg",
    description: "Список круп",
    productIds: [4, 5, 6, 7],
  },
 
];

const products = [
  {
    id: 1,
    name: "Сморчки зеленые",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg",
    categoryIds: [1],
    proteins: 1.7,
    fats: 0.3,
    carbohydrates: 4.2,
    kcal: 27,
  },
  {
    id: 2,
    name: "Арбуз",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg",
    categoryIds: [2],
    proteins: 0.7,
    fats: 0.2,
    carbohydrates: 3.2,
    kcal: 25,
  },
  {
    id: 3,
    name: "Сморчки свежие",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg",
    categoryIds: [1],
    proteins: 1.7,
    fats: 0.3,
    carbohydrates: 4.2,
    kcal: 27,
  },
  {
    id: 4,
    name: "Дыня",
    imageUrl:
      "https://supercalorizator.ru/instruments/calorizator/images/products/35.jpg",
    categoryIds: [2],
    proteins: 0.7,
    fats: 0.2,
    carbohydrates: 3.2,
    kcal: 25,
  },
];

const basket = [
  {
    productId: 1,
    weight: 300, // в граммах
  },
  {
    productId: 3,
    weight: 100, // в граммах
  },
];
