import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';

const OraclePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const slides = [
    {
      title: "Dicas de Performance de Consultas Oracle",
      subtitle: "Analisando, Otimizando e Melhores Práticas",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Database className="w-32 h-32 text-red-600" />
          <h1 className="text-5xl font-bold text-gray-800">Performance de Consultas Oracle</h1>
          <p className="text-2xl text-gray-600">Um Guia Prático de Otimização</p>
        </div>
      )
    },
    {
      title: "Como Analisar Performance de Consultas",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ferramentas Principais de Análise</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">1. EXPLAIN PLAN</h3>
              <p className="text-gray-700 mb-2">Mostra o plano de execução que o Oracle usará</p>
              <code className="bg-gray-800 text-green-400 p-3 block rounded text-sm">
                EXPLAIN PLAN FOR<br/>
                SELECT * FROM employees WHERE department_id = 10;<br/>
                <br/>
                SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY());
              </code>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-2">2. SQL Trace & TKPROF</h3>
              <p className="text-gray-700 mb-2">Estatísticas detalhadas de execução</p>
              <code className="bg-gray-800 text-green-400 p-3 block rounded text-sm">
                ALTER SESSION SET SQL_TRACE = TRUE;<br/>
                -- Execute sua consulta<br/>
                ALTER SESSION SET SQL_TRACE = FALSE;
              </code>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">3. Automatic Workload Repository (AWR)</h3>
              <p className="text-gray-700">Análise de performance do sistema e identificação dos principais SQLs</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Análise do Plano de Execução",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lendo Planos de Execução</h2>
          
          <div className="bg-yellow-50 p-5 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">Métricas Principais para Observar</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800">Cost</p>
                <p className="text-sm text-gray-600">Estimativa do otimizador de uso de recursos</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Cardinality</p>
                <p className="text-sm text-gray-600">Número estimado de linhas retornadas</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Bytes</p>
                <p className="text-sm text-gray-600">Volume de dados estimado</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Access Method</p>
                <p className="text-sm text-gray-600">Varredura completa, varredura de índice, etc.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Prioridade das Operações (Leia de baixo para cima!)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <span className="font-semibold">TABLE ACCESS FULL</span> - Varre a tabela inteira</li>
              <li>• <span className="font-semibold">INDEX RANGE SCAN</span> - Usa índice eficientemente</li>
              <li>• <span className="font-semibold">INDEX UNIQUE SCAN</span> - Melhor para buscas únicas</li>
              <li>• <span className="font-semibold">NESTED LOOPS</span> - Bom para conjuntos de resultados pequenos</li>
              <li>• <span className="font-semibold">HASH JOIN</span> - Eficiente para grandes volumes de dados</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Problemas Comuns de Performance",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O Que NÃO Fazer</h2>
          
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-lg font-bold text-red-900">❌ SELECT * FROM</h3>
              <p className="text-gray-700 text-sm">Recupera colunas desnecessárias, aumenta I/O e tráfego de rede</p>
              <code className="bg-gray-800 text-red-400 p-2 block rounded text-xs mt-2">
                SELECT * FROM large_table; -- RUIM
              </code>
              <code className="bg-gray-800 text-green-400 p-2 block rounded text-xs mt-1">
                SELECT id, name, status FROM large_table; -- BOM
              </code>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-lg font-bold text-red-900">❌ Funções em Colunas Indexadas</h3>
              <p className="text-gray-700 text-sm">Impede o uso de índice, força varredura completa da tabela</p>
              <code className="bg-gray-800 text-red-400 p-2 block rounded text-xs mt-2">
                WHERE UPPER(last_name) = 'SMITH' -- RUIM
              </code>
              <code className="bg-gray-800 text-green-400 p-2 block rounded text-xs mt-1">
                WHERE last_name = 'SMITH' -- BOM
              </code>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-lg font-bold text-red-900">❌ OR na Cláusula WHERE</h3>
              <p className="text-gray-700 text-sm">Pode impedir o uso de índice, considere UNION ou IN</p>
              <code className="bg-gray-800 text-red-400 p-2 block rounded text-xs mt-2">
                WHERE dept_id = 10 OR dept_id = 20 -- MAIS LENTO
              </code>
              <code className="bg-gray-800 text-green-400 p-2 block rounded text-xs mt-1">
                WHERE dept_id IN (10, 20) -- MELHOR
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mais Armadilhas a Evitar",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Anti-Padrões Adicionais</h2>
          
          <div className="space-y-3">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h3 className="text-lg font-bold text-orange-900">❌ Falta de Cláusula WHERE</h3>
              <p className="text-gray-700 text-sm">Retorna a tabela inteira, catastrófico em tabelas grandes</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h3 className="text-lg font-bold text-orange-900">❌ NOT IN com NULLs</h3>
              <p className="text-gray-700 text-sm">Pode retornar resultados inesperados, use NOT EXISTS</p>
              <code className="bg-gray-800 text-green-400 p-2 block rounded text-xs mt-2">
                WHERE NOT EXISTS (SELECT 1 FROM table2 WHERE ...) -- SEGURO
              </code>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h3 className="text-lg font-bold text-orange-900">❌ Conversão Implícita de Tipo de Dado</h3>
              <p className="text-gray-700 text-sm">Força o índice a ser ignorado</p>
              <code className="bg-gray-800 text-red-400 p-2 block rounded text-xs mt-2">
                WHERE employee_id = '100' -- ID é NUMBER
              </code>
              <code className="bg-gray-800 text-green-400 p-2 block rounded text-xs mt-1">
                WHERE employee_id = 100 -- CORRETO
              </code>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h3 className="text-lg font-bold text-orange-900">❌ Usar DISTINCT ao Invés de Corrigir a Lógica</h3>
              <p className="text-gray-700 text-sm">Mascara problemas de join, adiciona sobrecarga de ordenação</p>
            </div>
          </div>
        </div>
      )
    },    
    {
      title: "Avançado: Common Table Expressions (CTEs)",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cláusula WITH para Melhor Performance</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Benefícios de CTEs</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Legibilidade e manutenibilidade melhoradas</li>
              <li>• Cache de resultado de consulta (materializado)</li>
              <li>• Evita repetição de subconsultas</li>
              <li>• Habilita consultas recursivas</li>
            </ul>
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Sem CTE (Subconsulta Repetida)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT d.dept_name, <br/>
              {'  '}(SELECT AVG(salary) FROM employees WHERE dept_id = d.id) as avg_sal<br/>
              FROM departments d<br/>
              WHERE (SELECT AVG(salary) FROM employees WHERE dept_id = d.id) &gt; 50000;
            </code>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Com CTE (Computado Uma Vez)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              WITH dept_salaries AS (<br/>
              {'  '}SELECT dept_id, AVG(salary) as avg_salary<br/>
              {'  '}FROM employees<br/>
              {'  '}GROUP BY dept_id<br/>
              )<br/>
              SELECT d.dept_name, ds.avg_salary<br/>
              FROM departments d<br/>
              JOIN dept_salaries ds ON d.id = ds.dept_id<br/>
              WHERE ds.avg_salary &gt; 50000;
            </code>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">🔧 Hint MATERIALIZE</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              WITH dept_salaries AS (<br/>
              {'  '}SELECT /*+ MATERIALIZE */ dept_id, AVG(salary) as avg_salary<br/>
              {'  '}FROM employees GROUP BY dept_id<br/>
              ) ...
            </code>
            <p className="text-sm text-purple-900 mt-2">Força o Oracle a cachear o resultado do CTE</p>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Hints do Otimizador (Parte 1)",
      content: (
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Guiando o Otimizador</h2>
          
          <div className="bg-yellow-50 p-3 rounded-lg mb-2">
            <p className="text-yellow-900 text-sm"><span className="font-bold">Aviso:</span> Use hints com moderação! Eles podem ficar desatualizados e impedir que o Oracle escolha planos melhores conforme os dados mudam.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-md font-bold text-blue-900 mb-1">Hint INDEX</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Força o Oracle a usar um índice específico ao invés de varredura completa</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Quando o otimizador ignora um índice em colunas seletivas (retornando &lt;5% das linhas)</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ INDEX(e emp_last_name_idx) */<br/>
                employee_id, first_name FROM employees e<br/>
                WHERE last_name = 'Smith';
              </code>
              <p className="text-xs text-blue-900 mt-1 italic">Exemplo: Buscar sobrenome específico em tabela de 1M linhas - índice é mais rápido que varrer todas as linhas</p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-md font-bold text-blue-900 mb-1">Hint FULL</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Força varredura completa da tabela, ignorando todos os índices</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Ao recuperar grande porcentagem de linhas (&gt;20%) ou quando otimizador escolhe índice erroneamente</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ FULL(e) */<br/>
                * FROM employees e<br/>
                WHERE salary BETWEEN 30000 AND 80000;
              </code>
              <p className="text-xs text-blue-900 mt-1 italic">Exemplo: Consulta retorna 70% da tabela - varredura completa lê todos os blocos sequencialmente, mais rápido que buscas por índice</p>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
              <h3 className="text-md font-bold text-green-900 mb-1">Hint PARALLEL</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Divide a execução da consulta entre múltiplos núcleos/processos de CPU</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Varreduras de tabelas grandes em data warehouses com recursos de CPU disponíveis</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ PARALLEL(sales 8) */<br/>
                region, SUM(amount) FROM sales<br/>
                WHERE sale_date &gt;= DATE '2024-01-01'<br/>
                GROUP BY region;
              </code>
              <p className="text-xs text-green-900 mt-1 italic">Exemplo: Agregando tabela de 100M linhas - 8 workers paralelos podem reduzir tempo de 10 min para 2 min</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Hints do Otimizador (Parte 2)",
      content: (
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hints de Join e Acesso</h2>

          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
              <h3 className="text-md font-bold text-green-900 mb-1">Hint USE_HASH</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Força hash join - constrói tabela hash da tabela menor, busca na maior</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Juntando tabelas grandes sem índices nas colunas de join, processamento em lote</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ USE_HASH(e d) */<br/>
                e.name, d.dept_name<br/>
                FROM employees e JOIN departments d<br/>
                ON e.dept_id = d.id;
              </code>
              <p className="text-xs text-green-900 mt-1 italic">Exemplo: Juntando 500K empregados com 100 departamentos - hash join muito mais rápido que loops aninhados</p>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-md font-bold text-purple-900 mb-1">Hint USE_NL</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Força nested loop join - para cada linha da tabela externa, busca linhas correspondentes na interna</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Tabela externa pequena com coluna de join indexada na tabela interna grande (consultas OLTP)</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ USE_NL(o c) */<br/>
                o.order_id, c.customer_name<br/>
                FROM orders o JOIN customers c<br/>
                ON o.customer_id = c.customer_id<br/>
                WHERE o.order_date = TRUNC(SYSDATE);
              </code>
              <p className="text-xs text-purple-900 mt-1 italic">Exemplo: 50 pedidos de hoje juntando com 2M clientes - busca por índice por pedido é eficiente</p>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-md font-bold text-purple-900 mb-1">Hint LEADING</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Especifica qual tabela o Oracle deve acessar primeiro na ordem de join</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Quando você sabe que a tabela pequena filtrada deve conduzir o join</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ LEADING(d e p) */<br/>
                e.name FROM departments d<br/>
                JOIN employees e ON d.id = e.dept_id<br/>
                JOIN projects p ON e.id = p.emp_id<br/>
                WHERE d.location = 'NY';
              </code>
              <p className="text-xs text-purple-900 mt-1 italic">Exemplo: Apenas 3 deptos de NY (filtrados primeiro), depois seus empregados, depois projetos - minimiza linhas intermediárias</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Hints do Otimizador (Parte 3)",
      content: (
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hints de Controle Adicionais</h2>

          <div className="space-y-3">
            <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-md font-bold text-orange-900 mb-1">Hint NO_INDEX</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Impede o Oracle de usar qualquer índice (ou índice específico) na tabela</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Índice está desatualizado, baixa seletividade, ou quando varredura completa é comprovadamente mais rápida</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ NO_INDEX(e emp_status_idx) */<br/>
                * FROM employees e<br/>
                WHERE status = 'ACTIVE';
              </code>
              <p className="text-xs text-orange-900 mt-1 italic">Exemplo: 95% dos empregados são ACTIVE - busca por índice pior que varrer tabela sequencialmente</p>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-md font-bold text-orange-900 mb-1">Hint FIRST_ROWS(n)</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Otimiza consulta para retornar as primeiras N linhas o mais rápido possível</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Aplicações interativas com paginação, usuário esperando pelos primeiros resultados</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ FIRST_ROWS(10) */<br/>
                product_id, product_name, price<br/>
                FROM products<br/>
                WHERE category = 'Electronics'<br/>
                ORDER BY price DESC;
              </code>
              <p className="text-xs text-orange-900 mt-1 italic">Exemplo: Busca web mostrando primeiros 10 resultados - usuário não espera por todas as 10K linhas serem ordenadas</p>
            </div>

            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-600">
              <h3 className="text-md font-bold text-red-900 mb-1">Hint ALL_ROWS</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> Otimiza consulta para melhor throughput (minimiza consumo total de recursos)</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Jobs em lote, relatórios, data warehouses onde todas as linhas são necessárias</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT /*+ ALL_ROWS */<br/>
                customer_id, SUM(amount)<br/>
                FROM orders<br/>
                WHERE order_date &gt;= ADD_MONTHS(SYSDATE, -12)<br/>
                GROUP BY customer_id;
              </code>
              <p className="text-xs text-red-900 mt-1 italic">Exemplo: Relatório mensal em lote processando todos os clientes - otimizar para tempo total, não primeira linha</p>
            </div>

            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-600">
              <h3 className="text-md font-bold text-red-900 mb-1">Hint APPEND</h3>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">O que faz:</span> INSERT de caminho direto ignorando buffer cache, anexando dados acima da marca d'água alta</p>
              <p className="text-xs text-gray-700 mb-2"><span className="font-semibold">Quando usar:</span> Carga em massa de grandes quantidades de dados em tabelas</p>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                INSERT /*+ APPEND */ INTO sales_archive<br/>
                SELECT * FROM sales<br/>
                WHERE sale_date &lt; ADD_MONTHS(SYSDATE, -24);
              </code>
              <p className="text-xs text-red-900 mt-1 italic">Exemplo: Arquivando 10M linhas antigas - ignora buffer cache para inserts 5-10x mais rápidos</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Particionamento",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Particionamento de Tabelas para Tabelas Grandes</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">O que é Particionamento?</h3>
            <p className="text-gray-700 text-sm">Dividir tabelas grandes em pedaços menores e mais gerenciáveis, enquanto aparecem como uma única tabela para consultas</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Exemplo de Particionamento por Faixa</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              CREATE TABLE sales (<br/>
              {'  '}sale_id NUMBER,<br/>
              {'  '}sale_date DATE,<br/>
              {'  '}amount NUMBER<br/>
              )<br/>
              PARTITION BY RANGE (sale_date) (<br/>
              {'  '}PARTITION sales_q1 VALUES LESS THAN (DATE '2024-04-01'),<br/>
              {'  '}PARTITION sales_q2 VALUES LESS THAN (DATE '2024-07-01'),<br/>
              {'  '}PARTITION sales_q3 VALUES LESS THAN (DATE '2024-10-01'),<br/>
              {'  '}PARTITION sales_q4 VALUES LESS THAN (DATE '2025-01-01')<br/>
              );
            </code>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Poda de Partição</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT * FROM sales<br/>
              WHERE sale_date BETWEEN DATE '2024-04-01' AND DATE '2024-06-30';
            </code>
            <p className="text-gray-700 text-sm mt-2">Oracle automaticamente varre apenas a partição sales_q2, ignorando as outras!</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm">Particionamento por Lista</p>
              <p className="text-xs text-gray-600">Por valores discretos (regiões, status)</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm">Particionamento Hash</p>
              <p className="text-xs text-gray-600">Distribuição uniforme entre partições</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Funções Analíticas",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Funções de Janela para Melhor Performance</h2>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Abordagem de Self-Join (Mais Lento)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT e1.employee_id, e1.salary,<br/>
              {'  '}(SELECT AVG(e2.salary) FROM employees e2 <br/>
              {'   '}WHERE e2.dept_id = e1.dept_id) as dept_avg<br/>
              FROM employees e1;
            </code>
            <p className="text-red-900 text-sm mt-2">Requer subconsulta correlacionada para cada linha</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Função Analítica (Mais Rápido)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT employee_id, salary,<br/>
              {'  '}AVG(salary) OVER (PARTITION BY dept_id) as dept_avg<br/>
              FROM employees;
            </code>
            <p className="text-green-900 text-sm mt-2">Varredura única, computado em uma passada!</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">ROW_NUMBER()</h3>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT emp_id,<br/>
                {'  '}ROW_NUMBER() OVER <br/>
                {'  '}(ORDER BY salary DESC) rn<br/>
                FROM employees;
              </code>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">RANK()</h3>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT dept_id, salary,<br/>
                {'  '}RANK() OVER <br/>
                {'  '}(PARTITION BY dept_id<br/>
                {'   '}ORDER BY salary DESC) rnk<br/>
                FROM employees;
              </code>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">LAG/LEAD()</h3>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT sale_date, amount,<br/>
                {'  '}LAG(amount) OVER <br/>
                {'  '}(ORDER BY sale_date) prev<br/>
                FROM sales;
              </code>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">SUM() OVER</h3>
              <code className="bg-gray-800 text-white p-2 block rounded text-xs">
                SELECT month, revenue,<br/>
                {'  '}SUM(revenue) OVER <br/>
                {'  '}(ORDER BY month<br/>
                {'   '}ROWS UNBOUNDED PRECEDING)<br/>
                FROM monthly_sales;
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Cache de Resultado",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cacheando Resultados Frequentemente Usados</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Hint Result Cache</h3>
            <p className="text-gray-700 text-sm mb-2">Cacheia resultados de consulta na memória para execuções repetidas</p>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT /*+ RESULT_CACHE */ <br/>
              {'  '}product_id, product_name, category<br/>
              FROM products<br/>
              WHERE active = 'Y';
            </code>
            <p className="text-blue-900 text-sm mt-2">Ideal para: Dados de referência, tabelas de lookup, relatórios executados frequentemente</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Cache de Resultado de Função</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              CREATE OR REPLACE FUNCTION get_tax_rate<br/>
              {'  '}(p_state VARCHAR2) RETURN NUMBER<br/>
              {'  '}RESULT_CACHE<br/>
              IS<br/>
              {'  '}v_rate NUMBER;<br/>
              BEGIN<br/>
              {'  '}SELECT tax_rate INTO v_rate<br/>
              {'  '}FROM tax_rates WHERE state = p_state;<br/>
              {'  '}RETURN v_rate;<br/>
              END;
            </code>
            <p className="text-green-900 text-sm mt-2">Resultados da função cacheados automaticamente pelo Oracle</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Quando NÃO Usar Result Cache</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Dados mudam frequentemente</li>
              <li>• Consultas retornam grandes conjuntos de resultados</li>
              <li>• Cada consulta tem parâmetros únicos</li>
              <li>• Memória shared pool limitada</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg">
            <h3 className="text-md font-semibold text-purple-900 mb-2">Verificar Estatísticas do Cache</h3>
            <code className="bg-gray-800 text-white p-2 block rounded text-xs">
              SELECT * FROM V$RESULT_CACHE_STATISTICS;
            </code>
          </div>
        </div>
      )
    },
    {
      title: "Avançado: Operações em Lote",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">BULK COLLECT & FORALL</h2>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Processamento Linha-a-Linha (Lento)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              DECLARE<br/>
              {'  '}CURSOR c IS SELECT id, salary FROM employees;<br/>
              BEGIN<br/>
              {'  '}FOR rec IN c LOOP<br/>
              {'    '}UPDATE employees <br/>
              {'    '}SET bonus = rec.salary * 0.1<br/>
              {'    '}WHERE id = rec.id;<br/>
              {'  '}END LOOP;<br/>
              END;
            </code>
            <p className="text-red-900 text-sm mt-2">Trocas de contexto entre SQL e PL/SQL para cada linha</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Operações em Lote (Rápido)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              DECLARE<br/>
              {'  '}TYPE t_ids IS TABLE OF employees.id%TYPE;<br/>
              {'  '}TYPE t_sals IS TABLE OF employees.salary%TYPE;<br/>
              {'  '}l_ids t_ids; l_sals t_sals;<br/>
              BEGIN<br/>
              {'  '}SELECT id, salary <br/>
              {'  '}BULK COLLECT INTO l_ids, l_sals<br/>
              {'  '}FROM employees;<br/>
              <br/>
              {'  '}FORALL i IN l_ids.FIRST..l_ids.LAST<br/>
              {'    '}UPDATE employees<br/>
              {'    '}SET bonus = l_sals(i) * 0.1<br/>
              {'    '}WHERE id = l_ids(i);<br/>
              END;
            </code>
            <p className="text-green-900 text-sm mt-2">Todas as linhas processadas em lote - pode ser 10-100x mais rápido!</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Cláusula LIMIT para Conjuntos Grandes</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              LOOP<br/>
              {'  '}FETCH c BULK COLLECT INTO l_data LIMIT 1000;<br/>
              {'  '}EXIT WHEN l_data.COUNT = 0;<br/>
              {'  '}FORALL i IN 1..l_data.COUNT<br/>
              {'    '}INSERT INTO archive VALUES l_data(i);<br/>
              END LOOP;
            </code>
            <p className="text-blue-900 text-sm mt-2">Processa grandes conjuntos de dados em blocos para evitar problemas de memória</p>
          </div>
        </div>
      )
    },
    {
      title: "Caso de Uso 1: Relatório Lento",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Problema: Relatório Mensal de Vendas Levando 5 Minutos</h2>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Consulta Original (5 min)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT *<br/>
              FROM sales s, customers c, products p<br/>
              WHERE s.customer_id = c.customer_id<br/>
              AND s.product_id = p.product_id<br/>
              AND TO_CHAR(s.sale_date, 'YYYY-MM') = '2024-09'<br/>
              ORDER BY s.sale_date;
            </code>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Problemas Encontrados</h3>
            <ul className="text-gray-800 space-y-1 text-sm">
              <li>• SELECT * recuperando colunas desnecessárias</li>
              <li>• Função em sale_date impede uso de índice</li>
              <li>• Joins antigos ao invés de ANSI joins</li>
              <li>• Sem índice em sale_date</li>
            </ul>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Consulta Otimizada (8 seg)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT s.sale_id, c.customer_name, p.product_name, s.amount<br/>
              FROM sales s<br/>
              INNER JOIN customers c ON s.customer_id = c.customer_id<br/>
              INNER JOIN products p ON s.product_id = p.product_id<br/>
              WHERE s.sale_date &gt;= DATE '2024-09-01'<br/>
              AND s.sale_date &lt; DATE '2024-10-01'<br/>
              ORDER BY s.sale_date;
            </code>
            <p className="text-green-900 mt-2 text-sm font-semibold">+ Índice criado: CREATE INDEX idx_sale_date ON sales(sale_date);</p>
          </div>
        </div>
      )
    },
    {
      title: "Caso de Uso 2: Timeout no Dashboard",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Problema: Timeout na Consulta do Dashboard de Usuário</h2>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Consulta Original (Timeout)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT u.username, COUNT(*) as order_count<br/>
              FROM users u<br/>
              LEFT JOIN orders o ON u.user_id = o.user_id<br/>
              WHERE UPPER(u.status) = 'ACTIVE'<br/>
              OR u.created_date &gt; SYSDATE - 30<br/>
              GROUP BY u.username;
            </code>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Problemas Encontrados</h3>
            <ul className="text-gray-800 space-y-1 text-sm">
              <li>• Função UPPER() em coluna indexada</li>
              <li>• Condição OR impedindo uso de índice</li>
              <li>• Juntando todos os usuários quando só precisa dos ativos</li>
              <li>• Plano de execução mostrou FULL TABLE SCAN em users</li>
            </ul>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Consulta Otimizada (&lt;2 seg)</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT u.username, COUNT(o.order_id) as order_count<br/>
              FROM users u<br/>
              LEFT JOIN orders o ON u.user_id = o.user_id<br/>
              WHERE (u.status = 'ACTIVE' OR u.created_date &gt; SYSDATE - 30)<br/>
              GROUP BY u.username;
            </code>
            <p className="text-green-900 mt-2 text-sm font-semibold">+ Armazenar status em maiúsculas no banco<br/>+ Índice composto criado: (status, created_date)</p>
          </div>
        </div>
      )
    },
    {
      title: "Caso de Uso 3: Problema N+1",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Problema: Aplicação Fazendo 1000+ Chamadas ao Banco</h2>
          
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Padrão de Código da Aplicação</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              -- Primeira consulta pega todos os pedidos<br/>
              SELECT order_id FROM orders WHERE status = 'PENDING';<br/>
              <br/>
              -- Então para CADA pedido (N consultas):<br/>
              SELECT * FROM order_items WHERE order_id = ?;<br/>
              SELECT * FROM customers WHERE customer_id = ?;<br/>
            </code>
            <p className="text-red-900 mt-2 text-sm">Resultado: 1 + (N × 2) consultas para N pedidos</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Solução com Uma Única Consulta</h3>
            <code className="bg-gray-800 text-white p-3 block rounded text-sm">
              SELECT <br/>
              {'  '}o.order_id, o.order_date, o.total_amount,<br/>
              {'  '}c.customer_name, c.email,<br/>
              {'  '}oi.item_id, oi.quantity, oi.price<br/>
              FROM orders o<br/>
              INNER JOIN customers c ON o.customer_id = c.customer_id<br/>
              LEFT JOIN order_items oi ON o.order_id = oi.order_id<br/>
              WHERE o.status = 'PENDING';
            </code>
            <p className="text-green-900 mt-2 text-sm font-semibold">Resultado: Apenas 1 consulta! Performance melhorou 50x</p>
          </div>

          <div className="bg-blue-100 p-3 rounded-lg mt-3">
            <p className="text-blue-900 text-sm"><span className="font-semibold">Dica:</span> Use métodos de coleção ou operações em lote no código da aplicação para reduzir viagens de ida e volta</p>
          </div>
        </div>
      )
    },
    // Slide 17: Combined Conclusões + Checklist
    {
      title: "Checklist",
      content: (
        <div className="space-y-4 overflow-auto">
          
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">Checklist</h2>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="text-md font-bold text-green-900 mb-2">✅ FAÇA</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>✓ Use EXPLAIN PLAN antes de produção</li>
                <li>✓ Selecione apenas colunas necessárias</li>
                <li>✓ Crie índices em colunas WHERE/JOIN</li>
                <li>✓ Use bind variables para consultas repetidas</li>
                <li>✓ Mantenha estatísticas atualizadas</li>
                <li>✓ Use sintaxe ANSI JOIN</li>
                <li>✓ Limite conjuntos com cláusulas WHERE</li>
                <li>✓ Use EXISTS ao invés de IN</li>
                <li>✓ Considere CTEs para consultas complexas</li>
                <li>✓ Use funções analíticas ao invés de self-joins</li>
                <li>✓ Implemente operações em lote em PL/SQL</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg">
              <h3 className="text-md font-bold text-red-900 mb-2">❌ NÃO FAÇA</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>✗ Use SELECT *</li>
                <li>✗ Aplique funções em colunas indexadas</li>
                <li>✗ Use OR quando IN é possível</li>
                <li>✗ Ignore conversões implícitas de tipo</li>
                <li>✗ Crie índices demais</li>
                <li>✗ Use DISTINCT para esconder joins ruins</li>
                <li>✗ Consultas sem WHERE em tabelas grandes</li>
                <li>✗ Use NOT IN com colunas anuláveis</li>
                <li>✗ Use hints em excesso sem testar</li>
                <li>✗ Processe linhas uma-a-uma em loops</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-100 p-3 rounded-lg">
            <h3 className="text-md font-bold text-blue-900 mb-1">Regra de Ouro</h3>
            <p className="text-gray-800 italic text-sm">"Meça, não adivinhe. Sempre verifique com EXPLAIN PLAN e tempos de execução reais."</p>
          </div>
        </div>
      )
    },
    {
      title: "Perguntas",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <HelpCircle className="w-32 h-32 text-blue-600" />
          <h1 className="text-5xl font-bold text-gray-800">Perguntas?</h1>

        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides.length]);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col overflow-hidden">
      {/* Área de conteúdo principal - ocupa todo espaço disponível */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-[95vw] flex flex-col">
          <div className="flex-1 p-8 overflow-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Menu de navegação inferior - colapsável */}
      <div className="relative">
        {/* Botão para expandir/colapsar */}
        <button
          onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-t-lg hover:bg-gray-700 transition-all shadow-lg z-20 flex items-center gap-2"
        >
          {isMenuCollapsed ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Mostrar Menu</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm">Ocultar Menu</span>
            </>
          )}
        </button>

        {/* Menu - com transição suave */}
        <div 
          className={`bg-gray-50 border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuCollapsed ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
          }`}
        >
          <div className="p-4 flex items-center justify-between max-w-[95vw] mx-auto">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex gap-1">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 w-2 rounded-full transition cursor-pointer hover:scale-150 ${
                        index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {slide.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OraclePresentation;