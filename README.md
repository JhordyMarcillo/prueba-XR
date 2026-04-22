# Aplicación AR - Logo de Ingeniería de Software

Esta carpeta contiene una experiencia web para mostrar el modelo GLB del proyecto en navegador y prepararlo para una demostración en realidad aumentada.

## Archivos

- `index.html`: interfaz principal.
- `styles.css`: diseño visual.
- `app.js`: generación del código QR.

## Cómo usarla (paso a paso)

### 1) Verificar estructura

Confirma que tengas esto:

- `27-blender/BGE_Dragon_2.5_Blender_Game_Engine_2.glb`
- `27-blender/ar-app/index.html`

El `index.html` ya está configurado para leer el GLB desde `../BGE_Dragon_2.5_Blender_Game_Engine_2.glb`.

### 2) Levantar servidor local (Windows)

Desde la carpeta raíz `27-blender`, ejecuta:

```powershell
python -m http.server 5500
```

Si usas `py` en lugar de `python`:

```powershell
py -m http.server 5500
```

### 3) Abrir la app

En tu PC abre:

`http://localhost:5500/ar-app/`

Si carga el modelo, la parte web está correcta.

### 4) Probar en celular (misma red Wi-Fi)

1. En PowerShell ejecuta `ipconfig`.
2. Busca tu IPv4 (por ejemplo `192.168.1.25`).
3. En el celular abre: `http://TU_IP:5500/ar-app/`
	- Ejemplo: `http://192.168.1.25:5500/ar-app/`

> Importante: en celular **no funciona** `localhost`. `localhost` en el teléfono apunta al mismo teléfono, no a tu PC.

### 5) Generar el QR

Dentro de la app:

1. En el campo URL pega el enlace que vas a compartir (local o público).
2. Pulsa **Generar QR**.
3. Pulsa **Descargar QR** para guardarlo e incluirlo en la presentación.

El QR ahora se autocompleta con `ar-live.html`, que abre la experiencia de cámara en vivo.

### 6) Modo AR en vivo (tipo ARLOOPA)

1. Abre `http://TU_IP:5500/ar-app/ar-live.html` desde el celular.
2. Acepta permisos de cámara.
3. Muestra el marcador Hiro (en otra pantalla o impreso):
	- https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png
4. El modelo GLB aparece anclado sobre el marcador en tiempo real.
5. El modelo mostrado es siempre tu dragón animado exportado desde Blender.

### 7) Para AR real (recomendado)

Publica `ar-app` en **GitHub Pages**, **Netlify** o **Vercel** y usa el enlace `https://...` en el QR.

> En muchos celulares, las funciones de AR se habilitan mejor con HTTPS.

## Qué explicar en la exposición

- El logo se relaciona con Ingeniería de Software por su simbología de fuerza, creatividad y tecnología.
- Los colores representan confianza, innovación y energía.
- El modelo 3D se construyó en Blender y se reutilizó como recurso visual para la AR.
- El QR permite acceder a la visualización desde un celular.

## Nota

La experiencia AR funciona mejor cuando la página está publicada con HTTPS.
