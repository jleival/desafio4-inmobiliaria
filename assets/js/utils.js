// assets/js/utils.js

// Esta función es de uso interno en este archivo, no necesitamos exportarla
function generarTemplatePropiedad(propiedad) {
  const iconoSmoke = propiedad.smoke
    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';

  const iconoPets = propiedad.pets
    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';

  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen de ${propiedad.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${iconoSmoke}
          ${iconoPets}
        </div>
      </div>
    </div>
  `;
}

// Exportamos la función que inyecta en el DOM
export function renderizarPropiedades(contenedorId, arreglo, limite = null) {
  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) return;

  let html = "";
  const cantidad = limite ? Math.min(limite, arreglo.length) : arreglo.length;

  for (let i = 0; i < cantidad; i++) {
    html += generarTemplatePropiedad(arreglo[i]);
  }

  contenedor.innerHTML = html;
}