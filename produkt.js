function show(data) {
  document.querySelector(".productContainer").innerHTML = `
    <figure>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp"
          alt="Produktbillede"
          class="productImage"
        />
        <span class="saleLabel hidden">Udsalg!</span>
      </figure>
      <section class="productDetails">
        <h2 class="productName">${data.productdisplayname}</h2>
        <div>
          <p class="articleType"><span class="bold">Type:</span>${data.usagetype}</p>
          <p class="productCategory">
            <span class="bold">Kategori:</span> ${data.category}
          </p>
          <p class="productPrice"><span class="bold">Pris:</span>${data.usagetype}kr</p>
        </div>
        <button class="buyButton">Køb nu</button>
      </section>
    `;
}

function myFetch() {
  fetch("https://kea-alt-del.dk/t7/api/products/1164")
    .then((response) => response.json())
    .then((data) => show(data));
}

myFetch();
