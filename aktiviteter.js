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

document.getElementById("filterButton").addEventListener("click", function() {
  // Få fat i alle de valgte kategorier
  let checkedCategories = document.querySelectorAll('.category:checked');
  
  // Gå igennem alle artiklerne og skjul dem, som ikke hører til de valgte kategorier
  let articles = document.querySelectorAll('.articlecontainer');
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    let category = article.getAttribute('data-categories').split(','); // Split kategorierne ved komma
    let shouldBeDisplayed = false;
    for (let j = 0; j < checkedCategories.length; j++) {
      let checkbox = checkedCategories[j];
      if (category.includes(checkbox.value)) { // Tjek om kategorien er iblandt de valgte
        shouldBeDisplayed = true;
        break; // Vi behøver ikke tjekke de andre kategorier, når vi allerede har fundet en match
      }
    }
    if (shouldBeDisplayed) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  }
});
