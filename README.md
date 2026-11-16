# Angel Caldas FingerStyle 🎸

Página web personal donde comparto mis videos de guitarra **fingerstyle**: covers y arreglos acústicos tocados con una sola guitarra.

🔗 **Ver la web:** https://angelcaldasdev.github.io/AngelCaldasFingerStyle/

## Contenido

- **Portada** con dos diapositivas (presentación y último video).
- **Sobre mí**: breve presentación del guitarrista.
- **Videos**: tarjetas con reproductor para cada video.
- **Enlaces** al final de la página: YouTube e Instagram.

## Tecnologías

- HTML5
- CSS3 (diseño responsive, variables CSS)
- JavaScript (sin librerías)

## Estructura del proyecto

```
AngelCaldasFingerStyle/
├── index.html      # Estructura de la página
├── styles.css      # Estilos
├── funciones.js    # Lista de videos, enlaces y diapositivas
├── img/            # Fotos (foto-perfil.jpg, guitarra.jpg)
└── videos/         # Videos en formato .mp4
```

## Cómo ejecutarlo en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/angelcaldasdev/AngelCaldasFingerStyle.git
   ```
2. Ábrelo en VS Code.
3. Instala la extensión **Live Server**, haz clic derecho en `index.html` y elige **Open with Live Server**.

## Cómo agregar un video nuevo

1. Copia el archivo `.mp4` a la carpeta `videos/`.
2. Abre `funciones.js` y añade una línea a `listaVideos`:
   ```js
   { titulo: "Nombre de la canción", archivo: "nombre-exacto-del-archivo.mp4" },
   ```
3. Sube los cambios:
   ```bash
   git add .
   git commit -m "Agrego nuevo video"
   git push
   ```

> GitHub rechaza archivos de más de 100 MB. Para videos pesados conviene comprimirlos o subirlos a YouTube.

## Redes

- YouTube: [@angelcaldas.musica](https://youtube.com/@angelcaldas.musica)
- Instagram: [@angel_rafael_01](https://www.instagram.com/angel_rafael_01)

## Inspiración

El diseño toma como referencia la web de [Sungha Jung](https://sunghajung.com), guitarrista fingerstyle a quien admiro mucho.

## Autor

**Angel Caldas** · Lima, Perú