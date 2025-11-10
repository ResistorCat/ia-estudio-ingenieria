#!/bin/bash

# Script para facilitar el deploy a GitHub Pages
# Asegurate de tener permisos de ejecución: chmod +x deploy.sh

echo "🚀 Deploy Script - Estudio IA en Ingeniería"
echo ""

# Colores para el output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar si gh-pages está instalado
if ! npm list gh-pages > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  gh-pages no está instalado. Instalando...${NC}"
    npm install --save-dev gh-pages
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Error al instalar gh-pages${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ gh-pages instalado correctamente${NC}"
fi

# Verificar si Git está inicializado
if [ ! -d .git ]; then
    echo -e "${YELLOW}⚠️  Git no está inicializado en este proyecto${NC}"
    echo "Ejecutá estos comandos primero:"
    echo "  git init"
    echo "  git add ."
    echo '  git commit -m "Initial commit"'
    echo "  git remote add origin https://github.com/TU-USUARIO/ia-estudio-ingenieria.git"
    echo "  git push -u origin main"
    echo ""
    exit 1
fi

# Verificar si hay cambios sin commitear
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Hay cambios sin commitear${NC}"
    read -p "¿Querés commitear los cambios ahora? (s/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[SsYy]$ ]]; then
        git add .
        read -p "Ingresá el mensaje del commit: " commit_message
        git commit -m "$commit_message"
        
        echo -e "${YELLOW}¿Querés hacer push a GitHub? (s/n): ${NC}"
        read -p "" -n 1 -r
        echo
        if [[ $REPLY =~ ^[SsYy]$ ]]; then
            git push
        fi
    fi
fi

echo ""
echo -e "${GREEN}🔨 Compilando la aplicación...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al compilar la aplicación${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}🚀 Deploying a GitHub Pages...${NC}"
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Deploy completado exitosamente!${NC}"
    echo ""
    echo "Tu sitio estará disponible en unos minutos en:"
    echo -e "${GREEN}https://TU-USUARIO.github.io/ia-estudio-ingenieria${NC}"
    echo ""
    echo "Podés verificar el estado en:"
    echo "https://github.com/TU-USUARIO/ia-estudio-ingenieria/deployments"
else
    echo -e "${RED}❌ Error durante el deploy${NC}"
    exit 1
fi
