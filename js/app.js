"use strict";

const categories = window.SA_DIRECTORY || [];
const grid = document.querySelector("#category-grid");

if (grid) {
  for (const category of categories) {
    const link = document.createElement("a");
    link.className = `category-card theme-${category.theme}`;
    link.href = `category.html?id=${encodeURIComponent(category.id)}`;

    const title = document.createElement("h3");
    title.textContent = category.title;

    const description = document.createElement("p");
    description.textContent = category.description;

    link.append(title, description);
    grid.append(link);
  }
}
