# 🎸 Angel Caldas FingerStyle

Página web personal donde comparto mis videos de **guitarra fingerstyle**: covers y arreglos acústicos tocados con una sola guitarra.

🔗 **Ver la página:** [angelcaldasdev.github.io/AngelCaldasFingerStyle](https://angelcaldasdev.github.io/AngelCaldasFingerStyle/)

## ✨ Características

- Portada con 3 diapositivas que cambian solas (con puntos para navegar).
- Galería de videos con reproductor propio; al reproducir uno, los demás se pausan.
- Enlaces a YouTube e Instagram en el encabezado, junto al nombre.
- Animaciones suaves, barra de progreso de lectura y aparición de tarjetas al hacer scroll.
- Diseño responsive (celular, tablet y PC) y respeto por `prefers-reduced-motion`.

## 🛠️ Tecnologías

HTML5 · CSS3 · JavaScript (sin librerías) · Tipografías Raleway y Open Sans · GitHub Pages

## 📁 Estructura

```
AngelCaldasFingerStyle/
├── img/            # fotos de la portada (foto-perfil, guitarra, acustica)
├── videos/         # archivos .mp4
├── index.html      # estructura de la página
├── styles.css      # estilos y animaciones
├── funciones.js    # lista de videos, enlaces y comportamiento
└── README.md
```

## ▶️ Ejecutar en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/angelcaldasdev/AngelCaldasFingerStyle.git
   ```
2. Abre la carpeta en VS Code y usa la extensión **Live Server** (o abre `index.html` en el navegador).

## ➕ Agregar un video nuevo

1. Copia el `.mp4` a la carpeta `videos/`.
2. Añade una línea en `listaVideos` dentro de `funciones.js`:
   ```javascript
   { titulo: "Nombre de la canción", archivo: "Angel Caldas FingerStyle - Nombre de la canción.mp4" },
   ```
3. El nombre del archivo debe coincidir **letra por letra** (GitHub Pages distingue mayúsculas).
4. Sube los cambios:
   ```bash
   git add .
   git commit -m "Agrego video: Nombre de la canción"
   git push
   ```

> ⚠️ GitHub rechaza archivos de más de **100 MB**. Si un video pesa más, comprímelo (por ejemplo con HandBrake).

## 🌐 Publicación

El sitio se publica con **GitHub Pages** desde la rama `main`. Después de cada `git push`, los cambios tardan 1 o 2 minutos en verse (recarga con `Ctrl + F5`).

## 👤 Autor

**Angel Rafael Caldas Ocmín** · Lima, Perú
[YouTube](https://youtube.com/@angelcaldas.musica) · [Instagram](https://www.instagram.com/angel_rafael_01) · [GitHub](https://github.com/angelcaldasdev)