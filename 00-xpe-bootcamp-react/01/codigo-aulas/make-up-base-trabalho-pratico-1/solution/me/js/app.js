let products = [];
let formElBrand = document.querySelector("#filter-brand");
let formElProductType = document.querySelector("#filter-type");
let secElCatalog = document.querySelector(".catalog");
let selElSortType = document.querySelector("#sort-type");

async function init() {
  products = await listProducts();
  renderBrand();
  renderProductType();
  renderData();
  selElSortType.addEventListener("change", sortProducts);
}
init();

function renderBrand() {
  let brands = [];
  for (const product of products) {
    if (!brands.includes(product.brand)) {
      const option = document.createElement("option");
      option.textContent = product.brand;
      option.value = product.brand;
      formElBrand.appendChild(option);
      brands.push(product.brand);
    }
  }
}

function renderProductType() {
  let types = [];
  for (const product of products) {
    if (!types.includes(product.product_type)) {
      const option = document.createElement("option");
      option.textContent = product.product_type;
      option.value = product.product_type;
      formElProductType.appendChild(option);
      types.push(product.product_type);
    }
  }
}

function renderData() {
    secElCatalog.innerHTML = ""
    
  for (const product of products) {
    const div = document.createElement("div");
    div.setAttribute("class", "product");
    div.setAttribute("data-name", product.name);
    div.setAttribute("data-brand", product.brand);
    div.setAttribute("data-type", product.product_type);
    div.setAttribute("tabindex", product.id);

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    figure.setAttribute("class", "product-figure");
    img.setAttribute("src", product.image_link);
    img.setAttribute("width", "215");
    img.setAttribute("height", "215");
    img.setAttribute("alt", product.name);
    img.setAttribute("onerror", "javascript:this.src='../img/unavailable.png'");

    figure.appendChild(img);

    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const divSec = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    section.setAttribute("class", "product-description");
    h1.setAttribute("class", "product-name");
    h1.textContent = product.name;
    divSec.setAttribute("class", "product-brands");
    span1.setAttribute("class", "product-brand background-brand");
    span1.textContent = product.brand;
    span2.setAttribute("class", "product-brand background-price");
    span2.textContent = `R$${Number(product.price) * 5.5}`;

    divSec.appendChild(span2);
    divSec.insertBefore(span1, span2);

    section.appendChild(divSec);
    section.insertBefore(h1, divSec);

    div.appendChild(section);
    div.insertBefore(figure, section);

    secElCatalog.append(div);
  }
}

function sortProducts(evt) {
    if (evt.target.value == "Menores Preços") {
        products.sort((i1, i2) => {
          if (Number(i1.price) < Number(i2.price)) {
            return -1;
          } else if (Number(i1.price) > Number(i2.price)) {
            return 1;
          } else {
            return 0;
          }
        });
        renderData()
    } else {
        console.log('não é menor preço')
    }
}

//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  const item = `<div class="product" data-name="NYX Mosaic Powder Blush Paradise" data-brand="nyx" data-type="bronzer" tabindex="508">
  <figure class="product-figure">
    <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png" width="215" height="215" alt="NYX Mosaic Powder Blush Paradise" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">NYX Mosaic Powder Blush Paradise</h1>
    <div class="product-brands"><span class="product-brand background-brand">Nyx</span>
<span class="product-brand background-price">R$ 57.70</span></div>
  </section>
  // CARREGAR OS DETALHES
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}

function showError(error) {
  if (error) {
    console.error(error);
  }
}
