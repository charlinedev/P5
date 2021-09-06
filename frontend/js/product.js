
// Constante: création de l'id produit + nouvelle url par produit
const search = new URLSearchParams(location.search);
const idProduct = search.get("_id");
const newUrl = `http://localhost:3000/api/cameras/${idProduct}`;

fetch(newUrl)
  .then((response) => response.json())
  .then((data) => {
    const product = data;
    Cam(data);
    
    // fonction: Affichage du produit
    function Cam (product) {
      
      const selectionProductImage = document.getElementById("productImage");
      selectionProductImage.innerHTML += `
        <img src="${product.imageUrl}" class="img-fluid" alt="${product.name}">
        `;
            const selectionProductName = document.getElementById("productName");
      selectionProductName.innerHTML += `
      <h5 class="card-title">${product.name}</h5>
      `;
            const selectionProductPrice = document.getElementById("productPrice");
      selectionProductPrice.innerHTML += `
      <h5 class="card-title">${reducePrice(product.price)}</h5>
      `;
            const selectionProductDescription = document.getElementById("productDescription");
      selectionProductDescription.innerHTML += `
      <p class="card-text">${product.description}</p>
      `;
        selectLenses(product);
        }
        
        // fonction: Ajouter une selection d'optique
        function selectLenses(product) {
            const optionSelected = document.getElementById("option"); 
            for (let lenses of product.lenses) {
                optionSelected.innerHTML += `<option value="${lenses}">${lenses}</option>`;
            }
        }
        

        const btnAddBasket = document.getElementById("btnAddBasket");
        btnAddBasket.addEventListener("click", (e) => {
            e.preventDefault();
        const list = document.getElementById("option");
        const quantity = document.getElementById("quantity");
        
        // variante: création d'une nouvelle ligne de produit panier si preselectionné
        let objectProduct = new Product(
            idProduct,
            product.name,
            product.description,
            product.price,
            list.value,
            quantity.value,
            product.imageUrl
            );

            // variante: si preselectionné garde sa position dans le localStorage
            let preselected = false;
            let adjustqty;
            for (products of basket) {
                switch (products.option) {
                    case objectProduct.option:
                        preselected = true;
                        adjustqty = basket.indexOf(products);
                }
            }

            // si preselectionné incrémente seulement la quantité
            if (preselected) {
                basket[adjustqty].quantity =
                    +basket[adjustqty].quantity + +objectProduct.quantity;
                localStorage.setItem("cameras", JSON.stringify(basket));
            // si non, ajoute la nvlle ligne de produit au localStorage
            } else {
                alert("L'article à bien été ajouté au panier")
                basket.push(objectProduct);
                localStorage.setItem("cameras", JSON.stringify(basket));
            }
        });
    });