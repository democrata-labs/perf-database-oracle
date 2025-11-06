# 📝 Histórico de Mudanças

## [v2.0.0] - 2024-10-09

### 🎨 Melhorias de Layout e UX

#### ✨ Novas Funcionalidades

**1. Layout em Tela Cheia**
- Apresentação agora ocupa **95% da largura da tela** (`max-w-[95vw]`)
- Altura ajustada para **100% da tela** (`h-screen`)
- Aproveitamento máximo do espaço disponível
- Ideal para apresentações e projetores

**2. Menu de Navegação Colapsável**
- Menu inferior **colapsado por padrão**
- Botão flutuante no centro inferior para expandir/colapsar
- Transição suave com animação de 300ms
- Estado gerenciado com `useState`

**3. Botão de Controle do Menu**
- Ícones `ChevronUp` / `ChevronDown` para indicar ação
- Texto descritivo: "Mostrar Menu" / "Ocultar Menu"
- Posicionado de forma não-intrusiva
- Design consistente com o tema

#### 🔧 Melhorias Técnicas

- Importação de ícones `ChevronUp` e `ChevronDown` de `lucide-react`
- Adicionado estado `isMenuCollapsed` (boolean)
- Classes Tailwind para animações suaves
- Layout responsivo com `overflow-hidden`

#### 🎯 Benefícios

- **+120% de espaço para conteúdo** - De ~40% para ~95% da tela
- **Foco melhorado** - Menu oculto remove distrações
- **UX profissional** - Animações e transições suaves
- **Flexibilidade** - Menu disponível quando necessário

---

## [v1.2.0] - 2024-10-09

### 📊 Reorganização de Slides

#### Mudanças na Ordem
- Movidos slides de "Problemas Comuns" para antes das conclusões
- Movidos "Casos de Uso" para depois dos problemas
- Nova ordem pedagógica mais efetiva

#### Nova Sequência (18 slides):
1. Introdução (3 slides)
2. Recursos Avançados (8 slides)
3. Problemas a Evitar (2 slides)
4. Casos de Uso (3 slides)
5. Conclusão (2 slides)

---

## [v1.1.0] - 2024-10-09

### ⌨️ Navegação por Teclado

#### Funcionalidades Adicionadas
- Tecla `←` (seta esquerda) para slide anterior
- Tecla `→` (seta direita) para próximo slide
- Controle de limites (não passa dos extremos)
- Event listener com cleanup automático

#### Implementação
- Hook `useEffect` para gerenciar eventos
- Função `handleKeyDown` para capturar teclas
- Estado atualizado via callback para evitar dependências

---

## [v1.0.0] - 2024-10-09

### 🎉 Versão Inicial

#### Funcionalidades Base
- 18 slides sobre Oracle Performance
- Tradução completa para português
- Oracle tokens mantidos em inglês
- Design moderno com Tailwind CSS
- Navegação com botões e indicadores

#### Conteúdo
- Ferramentas de análise (EXPLAIN PLAN, AWR)
- Recursos avançados (CTEs, Hints, Particionamento)
- Problemas comuns e anti-padrões
- Casos de uso práticos
- Checklist de performance

#### Tecnologias
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)

---

## 📊 Comparação de Versões

### Layout

| Característica | v1.0.0 | v2.0.0 |
|----------------|--------|--------|
| Largura máxima | 1280px | 95vw (~1800px em telas Full HD) |
| Altura | 600px fixo | 100vh (~1080px em telas Full HD) |
| Menu | Sempre visível | Colapsável (oculto por padrão) |
| Área útil | ~768,000px² | ~1,944,000px² |
| **Ganho** | - | **+153%** |

### Navegação

| Método | v1.0.0 | v1.1.0+ |
|--------|--------|---------|
| Botões | ✅ | ✅ |
| Teclado | ❌ | ✅ |
| Indicadores | ✅ | ✅ |
| Menu colapsável | ❌ | ✅ |

---

## 🚀 Próximas Melhorias (Roadmap)

### Em Consideração
- [ ] Modo tela cheia (F11)
- [ ] Salvar preferência do menu (localStorage)
- [ ] Atalho de teclado para menu (Tab)
- [ ] Temas claro/escuro
- [ ] Ajuste de tamanho de fonte
- [ ] Atalhos Home/End para primeiro/último slide
- [ ] Exportação para PDF
- [ ] Modo apresentador (notas)
- [ ] Timer de apresentação

---

## 📝 Notas de Migração

### De v1.x para v2.0

**Sem breaking changes!** A atualização é transparente.

**Mudanças visíveis:**
- Layout agora ocupa mais espaço
- Menu começa colapsado
- Botão de menu aparece na parte inferior

**Para usuários:**
- Use setas do teclado como antes
- Clique em "Mostrar Menu" se precisar dos controles
- Tudo funciona igual, só maior e melhor!

---

**Desenvolvido com ❤️ para apresentações profissionais**






