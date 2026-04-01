import { resources } from "../database/data.js";
import { renderUI } from "./ui.js";
import { addResource, updateResource } from "./crud.js";
import { toggleTheme, loadTheme } from "./theme.js";

renderUI(resources);
loadTheme();

// ADD
document.getElementById("resourceForm").addEventListener("submit", (e) => {
  e.preventDefault();

  addResource({
    title: title.value,
    category: category.value,
    level: level.value
  });

  e.target.reset();
});

// SEARCH
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  renderUI(resources.filter(r =>
    r.title.toLowerCase().includes(value)
  ));
});

// FILTER
filterCategory.addEventListener("change", (e) => {
  const value = e.target.value;

  renderUI(value
    ? resources.filter(r => r.category === value)
    : resources
  );
});

// SORT
sortBtn.addEventListener("click", () => {
  renderUI([...resources].sort((a, b) =>
    a.title.localeCompare(b.title)
  ));
});

// THEME
themeBtn.addEventListener("click", toggleTheme);

// UPDATE BUTTON
updateBtn.addEventListener("click", updateResource);