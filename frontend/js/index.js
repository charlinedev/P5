
// Promise: Objet avec sa fonction "then" et  "catch"
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    Cam(data);
  })
  .catch((erreur) => console.log("erreur : " + errortoconnect));

// fonction: affichage des produits sur la page d'accueil
function Cam(data) {
  for (produit of data) {
    const card = document.getElementById("Cards");
    //constante:réduction du prix /100
    const price = reducePrice(produit.price);
    card.innerHTML += `
        
        <div class="col-sm-12 col-md-6 col-lg-4 pb-3  ">
        <div class="card border bg-light shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <div class="row">
                    <a href="product.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="img-fluid p-1" alt="${produit.name}"></a>
                    <div class="col-6 col-sm-7 mt-3" >
                        <h5 class="card-title">${produit.name}</h5>
                    </div>
                    <div class="col-6 col-sm-5 text-end mt-3">
                        <h5 class="card-title">${price}</h5>
                    </div>
                </div>
                <p class="card-text text-truncate">${produit.description}</p>
                <a href="product.html?_id=${produit._id}" class="btn btn-secondary">Ajouter au panier</a>
            </div>
        </div>
    </div>`;
  }
}
