
function buildCategoryElement(categoryItem) {
    const wrapperCatagoryElement = document.createElement(`div`);
    const templateCategoryElement = `<div class="categories_item"><p>${categoryItem.name}</p><img src="${categoryItem.imageUrl}"/></div>`;
    wrapperCatagoryElement.innerHTML = templateCategoryElement;
    return wrapperCatagoryElement;
  }
  
  function renderCategories(categories, categoiesWrapper) {
    categories.forEach((category) => {
      const categoryElement = buildCategoryElement(category);
      categoiesWrapper.appendChild(categoryElement);
    });
  }