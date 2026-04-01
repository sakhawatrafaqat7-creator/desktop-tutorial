import { resources } from "../database/data.js";
import { renderUI } from "./ui.js";

export let editId = null;

export const addResource = (data) => {
  data.id = Date.now();
  resources.push(data);
  renderUI(resources);
};

export const deleteResource = (id) => {
  const filtered = resources.filter(item => item.id !== id);
  resources.length = 0;
  resources.push(...filtered);
  renderUI(resources);
};

export const openEdit = (id) => {
  const item = resources.find(r => r.id === id);

  document.getElementById("editTitle").value = item.title;
  document.getElementById("editCategory").value = item.category;
  document.getElementById("editLevel").value = item.level;

  document.getElementById("modal").classList.remove("hidden");
  editId = id;
};

export const updateResource = () => {
  const index = resources.findIndex(r => r.id === editId);

  resources[index] = {
    ...resources[index],
    title: document.getElementById("editTitle").value,
    category: document.getElementById("editCategory").value,
    level: document.getElementById("editLevel").value
  };

  document.getElementById("modal").classList.add("hidden");
  renderUI(resources);
};

window.closeModal = () => {
  document.getElementById("modal").classList.add("hidden");
};

window.handleEdit = openEdit;
window.handleDelete = deleteResource;