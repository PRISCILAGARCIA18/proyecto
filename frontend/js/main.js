document.addEventListener("DOMContentLoaded", () => {
  const cardsData = [
    {
      imagen: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      titulo: "Sales",
      descripcion: "Encargado de ventas y atención al cliente"
    },
    {
      imagen: "https://cdn-icons-png.flaticon.com/512/2790/2790920.png",
      titulo: "Warehouse",
      descripcion: "Gestión de inventario y almacenamiento"
    },
    {
      imagen: "https://cdn-icons-png.flaticon.com/512/1048/1048310.png",
      titulo: "Route",
      descripcion: "Encargado de la distribución y entrega"
    },
    {
      imagen: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
      titulo: "Purchasing",
      descripcion: "Responsable de compras y proveedores"
    }
  ];

  const contenedor = document.getElementById("modulo-cards");

  cardsData.forEach(card => {
    const cardHTML = `
      <div class="col-md-3 mb-4">
        <div class="card h-100 text-dark shadow-sm">
          <img src="${card.imagen}" class="card-img-top" alt="${card.titulo}" style="height: 150px; object-fit: contain;">
          <div class="card-body">
            <h5 class="card-title">${card.titulo}</h5>
            <p class="card-text">${card.descripcion}</p>
          </div>
        </div>
      </div>
    `;
    contenedor.innerHTML += cardHTML;
  });
});
