"use strict";

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id");
const categories = window.SA_DIRECTORY || [];

// Match only known category IDs; never use query-string content as HTML.
const category = categories.find((item) => item.id === requestedId);

const title = document.querySelector("#category-title");
const description = document.querySelector("#category-description");
const siteList = document.querySelector("#site-list");

if (!category) {
  title.textContent = "Category not found";
  description.textContent = "Choose a category from the homepage.";
  document.title = "Not found | South African Links";
} else {
  document.body.classList.add(`theme-${category.theme}`);
  title.textContent = category.title;
  description.textContent = category.description;
  document.title = `${category.title} | South African Links`;

  for (const site of category.sites) {
    // Only allow HTTPS links in the directory.
    let safeUrl;
    try {
      safeUrl = new URL(site.url);
      if (safeUrl.protocol !== "https:") continue;
    } catch {
      continue;
    }

    const card = document.createElement("article");
    card.className = "site-card";

    const heading = document.createElement("h2");
    heading.textContent = site.name;

    const help = document.createElement("p");
    help.textContent = site.howto;

    const link = document.createElement("a");
    link.className = "button-link";
    link.href = safeUrl.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit official website";

    card.append(heading, help, link);
    siteList.append(card);
  }
}
