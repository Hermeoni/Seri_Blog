// Demo select handler

window.addEventListener('DOMContentLoaded', () => {
  let demoSelect = document.querySelector('.demo__select');
  let heroSection = document.querySelector('.hero');
  let HeroTitleCornerName = heroSection.querySelector('.hero__title span');
  
  demoSelect.addEventListener('change', () => {
    heroSection.className = 'hero hero--has-shadow-' + demoSelect.value;
    HeroTitleCornerName.innerHTML = demoSelect.value;
  });
});