let = productListeContainer = document.querySelector(".productListeContainer");
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    let markup = data
      .map((produkt) => {
        return `<article class="productCard">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp"
          alt="Produktbillede"
          class="productImage"
        />
        <section>
          <h2 class="productName">Produktnavn</h2>
          <div>
            <p class="productPrice"><span class="bold">Pris:</span> 100 kr</p>
          </div>
        </section>
      </article>`;
      })
      .join("");
    productListeContainer.innerHTML = markup;
  });
