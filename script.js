document.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => content.classList.remove('active'));
      const target = tab.getAttribute('data-tab');
      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  const btnViewCreations = document.getElementById('btn-view-creations');
  if (btnViewCreations) {
    btnViewCreations.addEventListener('click', () => {
      const creationsTab = document.querySelector('.tab[data-tab="creations"]');
      if (creationsTab) {
        creationsTab.click();
      }
    });
  }

    fields.forEach(field => {
      const el = document.getElementById(field.id);
      if (!el) return;

      let value;
      if (field.id === 'popup-title') {
        value = img.dataset.title || "Titre non défini";
        el.textContent = value;
        return; // On ne cache pas le titre
      } else {
        const dataName = field.id.replace('popup-', '');
        value = img.dataset[dataName] || "";
      }

      const parentP = el.closest('p');
      if (!value.trim()) {
        if (parentP) parentP.style.display = 'none';
      } else {
        if (parentP) parentP.style.display = '';
        el.textContent = value;
      }
    });

  // Flèche gauche (création précédente)
  leftArrow.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = creations.length - 1; // boucle à la dernière création
    }
    showCreation(prevIndex);
  });

  // Flèche droite (création suivante)
  rightArrow.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= creations.length) {
      nextIndex = 0; // boucle au début
    }
    showCreation(nextIndex);
  });
});
