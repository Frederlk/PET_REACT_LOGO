if (isMobile.any()) {
   let menuParents = document.querySelectorAll('.menu-page__parent>a');
   for (let index = 0; index < menuParents.length; index++) {
      const menuParent = menuParents[index];
      menuParent.addEventListener("click", function (e) {
         menuParent.parentElement.classList.toggle('_active');
         e.preventDefault();
      });
   }
}
else {
   let menuParents = document.querySelectorAll('.menu-page__parent');
   for (let index = 0; index < menuParents.length; index++) {
      const menuParent = menuParents[index];
      menuParent.addEventListener("mouseenter", function (e) {
         menuParent.classList.add("_active");
      });
      menuParent.addEventListener("mouseleave", function (e) {
         menuParent.classList.remove("_active");
      });
   }
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
   menuPageBurger.classList.toggle("_active");
   _slideToggle(menuPageBody);
});



let searchTitle = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');
searchTitle.addEventListener("click", function (e) {
   searchTitle.classList.toggle("_active");
   _slideToggle(categoriesSearch);
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
   const checkboxCategory = checkboxCategories[index];
   checkboxCategory.addEventListener("change", function (e) {
      checkboxCategory.classList.toggle("_active");

      let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

      if (checkboxActiveCategories.length > 0) {
         searchTitle.classList.add('_categories');
         let searchQuantity = document.querySelector('.search-page__quantity');
         searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
      }
      else {
         searchTitle.classList.remove('_categories');
      }
   });
}

var startSlider = document.getElementById('slider-start');
if (startSlider) {
   noUiSlider.create(startSlider, {
      start: [0, 200000],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
         'min': [0],
         'max': [200000]
      }
   });

   const priceStart = document.getElementById('price-start');
   const priceEnd = document.getElementById('price-end');
   priceStart.addEventListener('change', setPriceValues);
   priceEnd.addEventListener('change', setPriceValues);

   function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
         priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
         priceEndValue = priceEnd.value;
      }
      startSlider.noUiSlider.set([priceStartValue, priceEndValue]);
   }
}

if (isMobile.any()) {
   const filterTitle = document.querySelector('.filter__title');
   filterTitle.addEventListener('click', function (e) {
      filterTitle.classList.toggle('_active');
      _slideToggle(filterTitle.nextElementSibling);
   });
}