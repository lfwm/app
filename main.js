import { DATA } from "./data.js";

function renderSection(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
    const el = document.createElement("div");

    if (item.label) {
      el.className = "section-label";
      el.innerHTML = `<h3>${item.title}</h3><p>${item.contents}</p>`;
    } else {
      el.className = "card";
      el.innerHTML = `
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>${item.descriptions}</p>
        <a href="${item.url}" target="_blank">GET</a>
      `;
    }
    container.appendChild(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.entries(DATA).forEach(([key, value]) => {
    renderSection(value, `${key}-section`);
  });

  document.querySelectorAll(".tab-button").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab-button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".tab-content")
        .forEach(c => c.classList.remove("active"));
      document.getElementById(btn.dataset.tab)
        .classList.add("active");
    };
  });
});
