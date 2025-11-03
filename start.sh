#!/bin/bash

echo "🚀 Iniciando Apresentação Oracle Performance..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

echo "✨ Iniciando servidor de desenvolvimento..."
echo "🌐 A apresentação será aberta em http://localhost:5173"
echo ""
echo "Pressione Ctrl+C para parar o servidor"
echo ""

npm run dev

