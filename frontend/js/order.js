const order = JSON.parse(localStorage.getItem("order")) || [];

// affiche Mes informations
const informations = document.getElementById("contact");
informations.innerHTML += `
    <div class=" fs-5 text-center fw-bold">
        <p class="text">${order.contact.firstName} ${order.contact.lastName}</p>
        <p class="text">${order.contact.address}</p>
        <p class="text">${order.contact.city}</p>
    </div>
    `;

// affiche Récapitulatif de ma commande
for (product of basket) {
    displayProductListTable(product);
}
const deletedItem = document.getElementsByClassName("rounded");
for(element of deletedItem){
    element.classList.add("d-none");
}

//affiche le prix total
totalPrice();