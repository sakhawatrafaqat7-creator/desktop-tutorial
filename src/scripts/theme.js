export const toggleTheme = () => {
  const body = document.getElementById("body");

  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");

  localStorage.setItem("theme", body.className);
};

export const loadTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) document.getElementById("body").className = saved;
};