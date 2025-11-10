# 🚀 Guía de Deploy a GitHub Pages

Esta guía te ayudará a publicar tu aplicación React en GitHub Pages.

## 📋 Pre-requisitos

- Tener una cuenta de GitHub
- Git instalado en tu computadora
- Node.js y npm instalados

## 🔧 Paso 1: Configurar el Proyecto

Ya está configurado! El `package.json` tiene:
- La propiedad `homepage` (necesitas cambiar `[TU-USUARIO]` por tu usuario de GitHub)
- Scripts de `predeploy` y `deploy`

## 📦 Paso 2: Instalar gh-pages

Ejecutá este comando en la terminal (dentro de la carpeta del proyecto):

```bash
npm install --save-dev gh-pages
```

## 🔐 Paso 3: Crear Repositorio en GitHub

1. Andá a https://github.com/new
2. Nombre del repositorio: `ia-estudio-ingenieria` (o el que prefieras)
3. Dejalo **público**
4. **NO** inicialices con README, .gitignore o licencia
5. Click en "Create repository"

## 🎯 Paso 4: Inicializar Git Local

Ejecutá estos comandos en la terminal (dentro de la carpeta del proyecto):

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Estudio IA en Ingeniería"

# Cambiar nombre de la rama a main (si es necesario)
git branch -M main

# Agregar el remote de GitHub (reemplazá TU-USUARIO con tu usuario)
git remote add origin https://github.com/TU-USUARIO/ia-estudio-ingenieria.git

# Subir el código a GitHub
git push -u origin main
```

## 🌐 Paso 5: Actualizar la URL en package.json

Abrí `package.json` y cambiá la línea de `homepage`:

```json
"homepage": "https://TU-USUARIO-REAL.github.io/ia-estudio-ingenieria"
```

Por ejemplo, si tu usuario es "juanperez":
```json
"homepage": "https://juanperez.github.io/ia-estudio-ingenieria"
```

## 🚀 Paso 6: Deploy a GitHub Pages

Ejecutá este comando:

```bash
npm run deploy
```

Este comando va a:
1. Compilar tu aplicación (`npm run build`)
2. Crear una rama `gh-pages`
3. Subir el build a esa rama
4. GitHub Pages automáticamente detectará la rama y publicará el sitio

## ⏱️ Paso 7: Esperar y Verificar

1. Esperá 1-2 minutos para que GitHub Pages procese el sitio
2. Andá a: `https://TU-USUARIO.github.io/ia-estudio-ingenieria`
3. ¡Deberías ver tu aplicación publicada! 🎉

## 🔄 Actualizar el Sitio (después del primer deploy)

Cada vez que hagas cambios y quieras actualizarlo:

```bash
# 1. Commitear los cambios
git add .
git commit -m "Descripción de los cambios"
git push

# 2. Deploy de nuevo
npm run deploy
```

## 🛠️ Troubleshooting

### Problema: "gh-pages not found"
**Solución:** Ejecutá `npm install --save-dev gh-pages`

### Problema: "remote origin already exists"
**Solución:** 
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/ia-estudio-ingenieria.git
```

### Problema: La página muestra un error 404
**Soluciones:**
1. Verificá que el `homepage` en `package.json` sea correcto
2. Andá a GitHub > Tu Repo > Settings > Pages
3. Verificá que "Source" esté en "Deploy from a branch"
4. Verificá que la rama sea "gh-pages" y la carpeta "/ (root)"
5. Esperá unos minutos más

### Problema: Los estilos no cargan
**Solución:** Verificá que el `homepage` en `package.json` sea exactamente igual a la URL de GitHub Pages

## 📱 Compartir tu Sitio

Una vez publicado, podés compartir el link:
```
https://TU-USUARIO.github.io/ia-estudio-ingenieria
```

## 🎨 Personalizar el Dominio (Opcional)

Si querés un dominio personalizado:
1. Andá a Settings > Pages en tu repositorio de GitHub
2. En "Custom domain" ingresá tu dominio
3. Seguí las instrucciones de configuración de DNS

## 📊 Ver Estadísticas (Opcional)

Podés agregar Google Analytics o GitHub Insights para ver cuántas visitas tiene tu sitio.

---

## ✅ Checklist Rápido

- [ ] Instalar gh-pages: `npm install --save-dev gh-pages`
- [ ] Crear repositorio en GitHub
- [ ] Actualizar `homepage` en package.json con tu usuario real
- [ ] Inicializar git: `git init`
- [ ] Agregar archivos: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Agregar remote: `git remote add origin URL_DE_TU_REPO`
- [ ] Push inicial: `git push -u origin main`
- [ ] Deploy: `npm run deploy`
- [ ] Esperar 1-2 minutos
- [ ] Verificar en: `https://TU-USUARIO.github.io/NOMBRE-REPO`

---

¡Éxito con tu deploy! 🚀

Si tenés problemas, revisá la sección de Troubleshooting o contactame.
