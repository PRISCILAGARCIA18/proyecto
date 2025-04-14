document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      imagen: "img/sales.jpg",
      titulo: "Ventas",
      descripcion: "Gestión de ventas y atención al cliente."
    },
    {
      imagen: "img/warehouse.jpg",
      titulo: "Almacén",
      descripcion: "Control de inventario y almacenamiento."
    },
    {
      imagen: "img/route.jpg",
      titulo: "Rutas",
      descripcion: "Optimización de rutas de entrega."
    },
    {
      imagen: "img/purchasing.jpg",
      titulo: "Compras",
      descripcion: "Gestión de compras y proveedores."
    }
  ];

  const contenedor = document.getElementById("user-dashboard-cards");

  cards.forEach(card => {
    contenedor.innerHTML += `
      <div class="col-md-3">
        <div class="card mb-4 shadow-sm">
          <img src="${card.imagen}" class="card-img-top" alt="${card.titulo}">
          <div class="card-body">
            <h5 class="card-title">${card.titulo}</h5>
            <p class="card-text">${card.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  });
});
