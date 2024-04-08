// accordion.js

// Array of accordion titles or headings
const accordionTitles = ['Section tt1', 'Section 2', 'Section 3'];

// Array of accordion content
const accordionContent = [
  'hhhLorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

// Function to create accordion
function createAccordion(containerId, titles, content) {
  const container = document.getElementById(containerId);

  titles.forEach((title, index) => {
    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.textContent = title;
    header.addEventListener('click', () => {
      const content = accordion.querySelector('.accordion-content');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    const accordionContent = document.createElement('div');
    accordionContent.className = 'accordion-content';
    accordionContent.textContent = content[index];

    accordion.appendChild(header);
    accordion.appendChild(accordionContent);

    container.appendChild(accordion);
  });
}

// Call function to create accordion
createAccordion('accordionContainer', accordionTitles, accordionContent);
  