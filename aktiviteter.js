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

function filterItems() {
  // Hent værdierne fra valgte checkbokse
  let selectedInteresser = Array.from(document.querySelectorAll('input[name="interesser"]:checked')).map(interesse => interesse.value);
  let selectedAldersgruppe = Array.from(document.querySelectorAll('input[name="aldersgruppe"]:checked')).map(aldersgruppe => aldersgruppe.value);
  let selectedVarighed = Array.from(document.querySelectorAll('input[name="varighed"]:checked')).map(varighed => varighed.value);

  // Filtrér dine data baseret på de valgte kriterier ved hjælp af en for loop
  let filteredItems = [];
  for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (
          selectedInteresser.includes(item.interesse) &&
          selectedAldersgruppe.includes(item.aldersgruppe) &&
          selectedVarighed.includes(item.varighed)
      ) {
          filteredItems.push(item);
      }
  }

  // Vis de filtrerede resultater
  console.log(filteredItems);
}

// Her er et eksempel på dine data
let items = [
  { interesse: "indendørs", aldersgruppe: "7-13", varighed: "3-5-timer" },
  { interesse: "udendørs", aldersgruppe: "14-16", varighed: "6+-timer" },
  { interesse: "skole-og-mentor", aldersgruppe: "17-18", varighed: "2-timer" },
  { interesse: "kreativ", aldersgruppe: "18-22", varighed: "6+-timer" },
  { interesse: "aktiv", aldersgruppe: "23+", varighed: "3-5-timer" }
];






