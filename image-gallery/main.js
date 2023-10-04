const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const galleryWrapper = document.querySelector(".gallery-wrapper");
const baseUrl = "https://api.unsplash.com/search/photos?page=1&per_page=9";
let query = "&query=''";
const clientID = "&client_id=tl5SPOXDUnmZktEBhWhfAJFaQgwYwBZHCKf6jOPqlxE";
let url = `${baseUrl}${query}${clientID}`;
window.addEventListener("load", getData);
searchBtn.addEventListener("click", () => {
  query = `&query='${searchInput.value}'`;
  url = baseUrl + query + clientID;
  galleryWrapper.innerHTML = "";
  getData();
});

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  data.results.map((result) => {
    const img = document.createElement("img");
    img.classList.add("gallery-img");
    img.src = `${result.urls.regular}`;
    img.alt = `${result.alt_description}`;
    galleryWrapper.append(img);
  });
}

searchForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    query = `&query='${searchInput.value}'`;
    url = baseUrl + query + clientID;
    galleryWrapper.innerHTML = "";
    getData();
  }
});
