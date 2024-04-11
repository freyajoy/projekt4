// kode til accordion:

document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(function(item) {
      const header = item.querySelector(".accordion-header");
  
      header.addEventListener("click", function() {
        const isActive = item.classList.contains("active");
        const icon = header.querySelector("i");
  
        accordionItems.forEach(function(item) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").classList.remove("active");
          item.querySelector("i").classList.remove("rotate");
        });
  
        if (!isActive) {
          item.classList.add("active");
          item.querySelector(".accordion-content").classList.add("active");
          icon.classList.add("rotate");
        }
      });
    });
  });


//kode til filtrering:

let filterButtons = document.querySelectorAll('.filterButton');
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function() {
    console.log("udført")
  
    // Få fat i alle de valgte kategorier
  let checkedCategories = document.querySelectorAll('.category:checked');
  
  // Gå igennem alle artiklerne og skjul dem, som ikke hører til de valgte kategorier
  let articles = document.querySelectorAll('.articlecontainer');
  for (let j = 0; j < articles.length; j++) {
    let article = articles[j];
    let category = article.getAttribute('data-categories').split(','); // Split kategorierne ved komma
    let shouldBeDisplayed = false;
    for (let k = 0; k < checkedCategories.length; k++) {
      let checkbox = checkedCategories[k];
      if (category.includes(checkbox.value)) { // Tjek om kategorien er iblandt de valgte
        shouldBeDisplayed = true;
        break; // Vi behøver ikke tjekke de andre kategorier, når vi allerede har fundet en match
      }
    }
    if (shouldBeDisplayed) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  }
})};
