# 🏡 Inmobiliaria ADL - Plataforma Dinámica de Propiedades

Un proyecto de desarrollo web frontend diseñado para visualizar dinámicamente un catálogo de propiedades inmobiliarias (en venta y en alquiler). Este proyecto demuestra el uso avanzado de JavaScript Vanilla (ES6) para la manipulación del DOM, renderizado dinámico de componentes y lógica condicional.

## 🚀 Características Principales

*   **Renderizado Dinámico:** Inyección de tarjetas de propiedades en el DOM a partir de arreglos de objetos en JavaScript.
*   **Modularidad (ES6 Modules):** Arquitectura de código escalable separando los datos (`data.js`), la lógica de interfaz (`utils.js`) y la ejecución principal (`main.js`).
*   **Lógica Condicional de UI:** Cambio dinámico de iconos y colores (usando FontAwesome y clases de Bootstrap) dependiendo de las políticas de cada propiedad (permitido/prohibido fumar, se aceptan/no se aceptan mascotas).
*   **Límites de Visualización:** Configuración algorítmica para mostrar un número limitado de propiedades (ej. 3 en la página de inicio) o el catálogo completo en las páginas de detalle.
*   **Diseño Responsivo:** Interfaz construida con **Bootstrap 5**, asegurando una correcta visualización en dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Estructura semántica.
*   **CSS3:** Estilos personalizados y ajustes de layout.
*   **JavaScript (ES6+):** Lógica funcional, manipulación del DOM, Template Literals, Operadores Ternarios y Módulos (`import/export`).
*   **Bootstrap 5:** Framework de diseño (Grillas, Cards, Navbar).
*   **FontAwesome:** Biblioteca de iconos vectoriales.

## 📁 Estructura del Proyecto

El proyecto sigue una estructura limpia y modular para facilitar la mantenibilidad del código:

```text
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos personalizados
│   └── js/
│       ├── data.js                # Base de datos local (Arrays de objetos)
│       ├── utils.js               # Funciones de renderizado e interfaces
│       └── main.js                # Archivo principal de ejecución
├── index.html                     # Landing page (Muestra máximo 3 propiedades por categoría)
├── propiedades_alquiler.html      # Catálogo completo de alquileres
├── propiedades_venta.html         # Catálogo completo de ventas
└── README.md                      # Documentación del proyecto
```
## ⚙️ Instalación y Uso
Debido a que este proyecto utiliza Módulos ES6 (<script type="module">), por razones de seguridad de los navegadores (políticas CORS), no se puede ejecutar simplemente abriendo el archivo .html con doble clic. Requiere un servidor local.

Instrucciones para entorno de desarrollo (Visual Studio Code):
1. Clona o descarga este repositorio en tu máquina local.

2. Abre la carpeta del proyecto en Visual Studio Code.

3. Asegúrate de tener instalada la extensión Live Server.

4. Haz clic derecho sobre el archivo index.html y selecciona la opción "Open with Live Server".

5. El proyecto se abrirá automáticamente en tu navegador predeterminado (usualmente en http://127.0.0.1:5500).

## 🧠 Lógica Destacada (Ejemplo de Código)
Uso de operadores ternarios e interpolación para modificar la interfaz de usuario en base a los datos:

```bash
// Renderizado condicional de iconos y permisos
const iconoSmoke = propiedad.smoke 
  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
```
## ✒️ Autor

*   **Jorge Leiva L.** - *Desafío Latam* - https://github.com/jleival/desafio4-inmobiliaria

---
*Este proyecto fue desarrollado como parte de un desafío práctico de validación de conocimientos en JavaScript, Arreglos, Objetos y Manipulación del DOM.*