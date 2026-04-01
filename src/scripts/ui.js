export const renderUI = (data) => {
  const container = document.getElementById("cardContainer");

  container.innerHTML = data.map(item => `
    <div class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
      
      <h2 class="text-xl font-bold mb-2">${item.title}</h2>
      <p class="text-gray-500">${item.category}</p>
      <p class="text-gray-400 mb-3">${item.level}</p>

      <div class="flex gap-2">
        <button onclick="handleEdit(${item.id})"
          class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
          Edit
        </button>

        <button onclick="handleDelete(${item.id})"
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  `).join("");
};