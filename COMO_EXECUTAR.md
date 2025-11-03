# 🎯 Como Executar a Apresentação

## ✅ Resumo do que foi feito

1. ✅ **Tradução completa para português**: Todos os textos, títulos e descrições foram traduzidos
2. ✅ **Oracle tokens mantidos em inglês**: Comandos SQL e termos técnicos Oracle permanecem em inglês
3. ✅ **Projeto configurado**: Vite + React + TypeScript + Tailwind CSS
4. ✅ **Scripts prontos**: Comandos para desenvolvimento e produção

## 🚀 Opção 1: Execução Rápida (Recomendado)

Execute o script de inicialização:

```bash
./start.sh
```

Este script irá:
- Instalar as dependências automaticamente (se necessário)
- Iniciar o servidor de desenvolvimento
- Abrir a aplicação em http://localhost:5173

## 🛠️ Opção 2: Execução Manual

### Passo 1: Instalar dependências

```bash
npm install
```

### Passo 2: Iniciar servidor de desenvolvimento

```bash
npm run dev
```

### Passo 3: Acessar

Abra seu navegador em: **http://localhost:5173**

## 📦 Build para Produção

Para criar uma versão otimizada:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para testar a versão de produção localmente:

```bash
npm run preview
```

## 🎮 Navegação na Apresentação

### 🎯 Layout em Tela Cheia
A apresentação agora ocupa **95% da tela** para máxima visibilidade!

### 🎛️ Menu de Navegação Colapsável
- **Por padrão**: Menu inferior fica **oculto** para mais espaço
- **Botão flutuante**: Clique em "Mostrar Menu" no centro inferior para expandir
- **Menu expandido** mostra:
  - Botões "Anterior" / "Próximo"
  - Contador de slides (ex: 5 / 18)
  - Indicadores de navegação rápida
  - Tooltips com títulos dos slides

### ⌨️ Navegação por Teclado (Recomendado)
- **← Seta Esquerda**: Volta ao slide anterior
- **→ Seta Direita**: Avança ao próximo slide
- Funciona com menu oculto ou expandido!

### 🖱️ Navegação com Menu
1. Clique em "Mostrar Menu" na parte inferior
2. Use os botões ou clique nos indicadores
3. Passe o mouse sobre os pontos para ver títulos
4. Clique em "Ocultar Menu" para esconder novamente

## 📋 Estrutura do Projeto

```
oracle-perf-presentation/
├── src/
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── index.css         # Estilos globais com Tailwind
├── oracle_perf_pres.tsx  # Componente principal (TRADUZIDO)
├── index.html            # HTML base
├── package.json          # Dependências e scripts
├── vite.config.ts        # Configuração do Vite
├── tsconfig.json         # Configuração do TypeScript
├── tailwind.config.js    # Configuração do Tailwind CSS
├── postcss.config.js     # Configuração do PostCSS
├── start.sh              # Script de inicialização rápida
└── README.md             # Documentação completa

```

## 🌟 Funcionalidades

- ✅ 17 slides com conteúdo completo sobre Oracle Performance
- ✅ Exemplos de código SQL com destaque de sintaxe
- ✅ Casos de uso práticos
- ✅ Hints do otimizador Oracle explicados
- ✅ Checklist de performance
- ✅ Design moderno e responsivo
- ✅ Navegação intuitiva

## ⚙️ Requisitos do Sistema

- **Node.js**: Versão 18 ou superior
- **npm**: Versão 9 ou superior (vem com Node.js)
- **Navegador**: Chrome, Firefox, Safari ou Edge (versões modernas)

## 🆘 Problemas Comuns

### Porta já em uso

Se a porta 5173 estiver em uso, o Vite automaticamente tentará usar outra porta. Verifique a mensagem no terminal.

### Erro ao instalar dependências

Tente limpar o cache do npm:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Página em branco

1. Verifique o console do navegador (F12) para erros
2. Certifique-se de que todas as dependências foram instaladas
3. Tente recarregar a página (Ctrl+R ou Cmd+R)

## 📞 Dúvidas?

Consulte o arquivo `README.md` para mais informações detalhadas.

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**

