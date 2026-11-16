/* ==========================================================
   Angel Caldas FingerStyle - funciones.js
   Edita las listas de abajo para agregar tus videos y enlaces.
   ========================================================== */

// ---------- 1. TUS VIDEOS (archivos guardados en la carpeta "videos") ----------
// "archivo" es el nombre exacto del .mp4 dentro de la carpeta videos/.
// Para agregar más videos: copia el .mp4 a esa carpeta y añade una línea aquí.
const listaVideos = [
  { titulo: "Come as you are", archivo: "Angel Caldas FingerStyle - Come as you are.mp4" },
  { titulo: "Yesterday",       archivo: "Angel Caldas FingerStyle - Yesterday.mp4" }
];

// ---------- 2. TUS ENLACES ----------
// Cambia las direcciones por las tuyas. Puedes borrar o añadir líneas.
const listaEnlaces = [
  {
    nombre: "YouTube",
    direccion: "https://youtube.com/@angelcaldas.musica",
    icono: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/>'
  },
  {
    nombre: "Instagram",
    direccion: "https://www.instagram.com/angel_rafael_01",
    icono: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.3"/>'
  }
];

// ---------- 3. VIDEOS: cada tarjeta lleva su reproductor ----------
const contenedorVideos = document.getElementById("rejillaVideos");

listaVideos.forEach((video) => {
  // encodeURI convierte los espacios del nombre del archivo en %20
  const rutaVideo = "videos/" + encodeURI(video.archivo);

  const tarjeta = document.createElement("article");
  tarjeta.className = "video";
  // "#t=0.5" hace que se vea un cuadro del video como portada antes de reproducirlo
  tarjeta.innerHTML = `
    <div class="video__marco">
      <video controls preload="metadata" playsinline src="${rutaVideo}#t=0.5"></video>
    </div>
    <h3 class="video__titulo">${video.titulo}</h3>`;

  contenedorVideos.appendChild(tarjeta);
});

// ---------- 4. ENLACES DEL PIE ----------
const contenedorEnlaces = document.getElementById("listaEnlaces");

listaEnlaces.forEach((enlace) => {
  const elemento = document.createElement("li");
  elemento.innerHTML = `
    <a href="${enlace.direccion}" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true">${enlace.icono}</svg>
      <span>${enlace.nombre}</span>
    </a>`;
  contenedorEnlaces.appendChild(elemento);
});

// ---------- 5. PORTADA: diapositivas con puntos (cambia sola cada 6 s) ----------
const diapositivas = document.querySelectorAll(".diapositiva");
const contenedorPuntos = document.getElementById("puntos");
let indiceActual = 0;
let temporizador;

function mostrarDiapositiva(indice) {
  indiceActual = indice;
  diapositivas.forEach((d, i) => d.classList.toggle("activa", i === indice));
  contenedorPuntos.querySelectorAll(".punto").forEach((p, i) => p.classList.toggle("activo", i === indice));
}

function reiniciarTemporizador() {
  clearInterval(temporizador);
  // Respeta a quienes prefieren menos movimiento: no rota sola
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  temporizador = setInterval(() => mostrarDiapositiva((indiceActual + 1) % diapositivas.length), 6000);
}

diapositivas.forEach((_, indice) => {
  const punto = document.createElement("button");
  punto.className = "punto";
  punto.setAttribute("aria-label", `Diapositiva ${indice + 1}`);
  punto.addEventListener("click", () => { mostrarDiapositiva(indice); reiniciarTemporizador(); });
  contenedorPuntos.appendChild(punto);
});

mostrarDiapositiva(0);
reiniciarTemporizador();

// ---------- 6. AÑO DEL PIE ----------
document.getElementById("anioActual").textContent = new Date().getFullYear();