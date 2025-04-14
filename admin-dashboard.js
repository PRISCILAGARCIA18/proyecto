function cargarModulo(modulo) {
  const contenedor = document.getElementById("admin-modulo-contenido");

  if (modulo === "crear") {
    contenedor.innerHTML = `
      <h3>Crear Usuario</h3>
      <form id="formCrearUsuario">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
          <label for="rol" class="form-label">Rol:</label>
          <select class="form-select" id="rol" required>
            <option value="">Selecciona un rol</option>
            <option value="sales">Sales</option>
            <option value="warehouse">Warehouse</option>
            <option value="route">Route</option>
            <option value="purchasing">Purchasing</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
      </form>
      <div id="mensaje" class="mt-3"></div>
    `;

    const form = document.getElementById("formCrearUsuario");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const rol = document.getElementById("rol").value;

      console.log("Formulario enviado ✅");
      console.log("Nombre:", nombre, "Rol:", rol);

      if (!nombre || !rol) {
        document.getElementById("mensaje").innerText = "Todos los campos son obligatorios";
        return;
      }

      try {
        const respuesta = await fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre, rol }),
        });

        const datos = await respuesta.json();
        console.log("Respuesta del backend:", datos);

        document.getElementById("mensaje").innerText = datos.mensaje || "Usuario creado";
        form.reset();
      } catch (error) {
        console.error("❌ Error al enviar datos:", error);
        document.getElementById("mensaje").innerText = "Error al conectar con el servidor";
      }
    });
  }

  else if (modulo === "ver") {
    contenedor.innerHTML = `
      <h3>Lista de Usuarios</h3>
      <ul class="list-group" id="lista-usuarios">
        <li class="list-group-item">Cargando...</li>
      </ul>
    `;

    fetch("http://localhost:3000/api/usuarios")
      .then(res => res.json())
      .then(usuarios => {
        const lista = document.getElementById("lista-usuarios");
        lista.innerHTML = "";

        if (usuarios.length === 0) {
          lista.innerHTML = "<li class='list-group-item'>No hay usuarios registrados</li>";
        } else {
          usuarios.forEach(usuario => {
            lista.innerHTML += `
              <li class="list-group-item">
                <strong>${usuario.nombre}</strong> – Rol: ${usuario.rol}
              </li>`;
          });
        }
      })
      .catch(error => {
        console.error("❌ Error al obtener usuarios:", error);
        document.getElementById("lista-usuarios").innerHTML =
          "<li class='list-group-item text-danger'>Error al obtener usuarios</li>";
      });
  }

  else if (modulo === "editar") {
    contenedor.innerHTML = `
      <h3>Editar Usuario</h3>
      <p>Aquí irá el buscador y editor.</p>
    `;
  }

  else if (modulo === "ordenes") {
    contenedor.innerHTML = `
      <h3>Órdenes Completadas</h3>
      <p>Historial de órdenes procesadas.</p>
    `;
  }

  else {
    contenedor.innerHTML = `<p>Módulo no encontrado</p>`;
  }
}

// ✅ Cargar módulo crear automáticamente al abrir la página
window.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente ✅");
  cargarModulo("crear");
});
