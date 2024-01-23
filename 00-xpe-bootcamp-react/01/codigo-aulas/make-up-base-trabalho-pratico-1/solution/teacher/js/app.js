allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  filterListerners();
});

// funcao responsavel por buscar os produtos
async function fetchProducts() {
  try {
    const response = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const products = await response.json();
    allProducts = products;
    // funcao para exibir os produtos no html
    displayProduct(allProducts);
  } catch (error) {
    console.log(error);
  }
}

// funcao que organiza os produtos e exibe no html
const displayProduct = (products) => {
  const productList = document.querySelector(".catalog");
  productList.innerHTML = "";

  products.forEach((product) => {
    const priceConverted = (product.price * 5.5).toFixed(2);
    // criar uma div
    const div = document.createElement("div");
    div.className = "product-item";
    // criar uma img
    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image_link;
    img.alt = product.name;

    // info do produto
    const productInfo = `
        <h2 class="product-name"> ${product.name} </h2>
        <div class="product-details">
            <span class="product-brand"> ${product.brand || ""} </span>
            <span class="product-price"> ${priceConverted} </span>            
        </div>
    `;
    div.appendChild(img);
    div.innerHTML += productInfo;
    productList.appendChild(div);
  });
};

// Funcao responsavel pelo filtro
function filterListerners() {
  // ouvimos os eventos de filtro
  document
    .getElementById("filter-name")
    .addEventListener("input", handleFilterChange);
  document
    .getElementById("filter-brand")
    .addEventListener("change", handleFilterChange);
  document
    .getElementById("sort-type")
    .addEventListener("change", handleSortChange);
}

function handleFilterChange() {
  const nameFilter = document.getElementById("filter-name").value.toLowerCase();
  const brandFilter = document
    .getElementById("filter-brand")
    .value.toLowerCase();
  const filteredProducts = allProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(nameFilter);
    const matchBrand =
      !brandFilter || product.brand?.toLowerCase() == brandFilter;
    return matchName && matchBrand;
  });
  displayProduct(filteredProducts);
}

function handleSortChange() {
  const sortType = document.getElementById("sort-type").value;
  let sortedProducts;
  switch (sortType) {
    case "Melhor Avaliados":
      sortedProducts = [...allProducts].sort((a, b) => b.rating - a.rating);
      break;
    case "Menores preços":
      sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
      break;
    case "Maiores preços":
      sortedProducts = [...allProducts].sort((a, b) => b.price - a.price);
      break;
    case "A-Z":
      sortedProducts = [...allProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
    case "Z-A":
      sortedProducts = [...allProducts].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;
    default:
      sortedProducts = [...allProducts];
  }
  displayProduct(sortedProducts);
}
