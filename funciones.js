/* ==========================================================
   Angel Caldas FingerStyle - funciones.js
   Edita las listas de abajo para agregar tus videos y enlaces.
   ========================================================== */

// ---------- 1. TUS VIDEOS (archivos guardados en la carpeta "videos") ----------
// "archivo" es el nombre exacto del .mp4 dentro de la carpeta videos/.
// Para agregar más videos: copia el .mp4 a esa carpeta y añade una línea aquí.
const listaVideos = [
  { titulo: "Come as you are",       archivo: "Angel Caldas FingerStyle - Come as you are.mp4" },
  { titulo: "Intro Come as you are", archivo: "Angel Caldas FingerStyle - Intro Come as you are.mp4" },
  { titulo: "Yesterday",             archivo: "Angel Caldas FingerStyle - Yesterday.mp4" },
  { titulo: "Jingle bells",          archivo: "Angel Caldas FingerStyle - Jingle bells.mp4" },
  { titulo: "Right here waiting",    archivo: "Angel Caldas FingerStyle - Right here waiting.mp4" },
  { titulo: "Dust in the wind",      archivo: "Angel Caldas FingerStyle - Dust in the wind.mp4" },
  { titulo: "Make you feel my love", archivo: "Angel Caldas FingerStyle - Make you feel my love.mp4" },
  { titulo: "My heart will go on",   archivo: "Angel Caldas FingerStyle - My heart will go on.mp4" },
  { titulo: "River flows in you",    archivo: "Angel Caldas FingerStyle - River flows in you.mp4" }
];

// ---------- 2. TUS ENLACES (aparecen en el encabezado, junto al nombre) ----------
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

listaVideos.forEach((video, posicion) => {
  // encodeURI convierte los espacios del nombre del archivo en %20
  const rutaVideo = "videos/" + encodeURI(video.archivo);

  const tarjeta = document.createElement("article");
  tarjeta.className = "video revelar";
  tarjeta.style.transitionDelay = (posicion % 3) * 0.12 + "s"; // aparecen en cascada
  tarjeta.innerHTML = `
    <div class="video__marco">
      <video controls preload="metadata" playsinline src="${rutaVideo}#t=0.5"></video>
    </div>
    <h3 class="video__titulo">${video.titulo}</h3>`;

  // Al reproducir uno, se pausan los demás
  tarjeta.querySelector("video").addEventListener("play", (evento) => {
    document.querySelectorAll(".video video").forEach((otro) => {
      if (otro !== evento.target) otro.pause();
    });
  });

  contenedorVideos.appendChild(tarjeta);
});

// ---------- 4. ENLACES DEL ENCABEZADO ----------
const contenedorEnlaces = document.getElementById("listaEnlaces");

listaEnlaces.forEach((enlace) => {
  const elemento = document.createElement("li");
  elemento.innerHTML = `
    <a class="${enlace.nombre.toLowerCase()}" href="${enlace.direccion}" target="_blank" rel="noopener noreferrer" aria-label="${enlace.nombre}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${enlace.icono}</svg>
      <span class="sr-only">${enlace.nombre}</span>
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

// ---------- 6. SCROLL: barra de progreso, sombra del encabezado y aparición ----------
const barraProgreso = document.getElementById("progreso");
const encabezado = document.getElementById("encabezado");

function alHacerScroll() {
  const recorrido = document.documentElement.scrollHeight - window.innerHeight;
  barraProgreso.style.width = (recorrido > 0 ? (window.scrollY / recorrido) * 100 : 0) + "%";
  encabezado.classList.toggle("compacto", window.scrollY > 10);
}
window.addEventListener("scroll", alHacerScroll, { passive: true });
alHacerScroll();

const elementosRevelar = document.querySelectorAll(".revelar");
if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  elementosRevelar.forEach((el) => observador.observe(el));
} else {
  elementosRevelar.forEach((el) => el.classList.add("visible"));
}

// ---------- 7. AÑO DEL PIE ----------
document.getElementById("anioActual").textContent = new Date().getFullYear();