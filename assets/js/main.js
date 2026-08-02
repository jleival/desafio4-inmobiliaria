// assets/js/main.js

// 1. Importamos los datos
import { propiedades_venta, propiedades_alquiler } from "./data.js";

// 2. Importamos la función de renderizado
import { renderizarPropiedades } from "./utils.js";

// 3. Ejecutamos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Estas dos funcionan en el index.html
  renderizarPropiedades("contenedor-venta", propiedades_venta, 3);
  renderizarPropiedades("contenedor-alquiler", propiedades_alquiler, 3);

  // Esta funciona en propiedades_venta.html
  renderizarPropiedades("contenedor-solo-venta", propiedades_venta);

  // Esta funciona en propiedades_alquiler.html
  renderizarPropiedades("contenedor-solo-alquiler", propiedades_alquiler);
});