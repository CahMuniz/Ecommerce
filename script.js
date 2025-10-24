// Dados dos produtos (exemplo simplificado)
  const produtos = [
    { id: 1, nome: 'Cadeira Gamer Xtreme', categoria: 'cadeira', preco: 799.90, img: 'https://i.imgur.com/R1Q9sJm.png' },
    { id: 2, nome: 'Monitor UltraWide 34"', categoria: 'monitor', preco: 2499.00, img: 'https://i.imgur.com/vHsD14z.png' },
    { id: 3, nome: 'Teclado Mecânico RGB', categoria: 'teclado', preco: 399.99, img: 'https://i.imgur.com/Ywp5qWQ.png' },
    { id: 4, nome: 'Mouse Gamer Pro', categoria: 'mouse', preco: 199.90, img: 'https://i.imgur.com/0QxP9dG.png' },
    { id: 5, nome: 'Cadeira Ergonômica Deluxe', categoria: 'cadeira', preco: 999.90, img: 'https://i.imgur.com/nGVqvud.png' },
  ];

  // Estado do carrinho (apenas contador por enquanto)
  let carrinhoCount = 0;

  // Elementos DOM que usaremos
  const btnsCategorias = document.querySelectorAll('.category-btn');
  const containerProdutos = document.getElementById('produtos-container');
  const btnCarrinhoCount = document.getElementById('carrinho-count');
  const abas = document.querySelectorAll('.tab-content');
  const abasBtns = document.querySelectorAll('.tab-btn');

  // Função para mostrar aba correta e esconder as outras
  function mostrarAba(id) {
    abas.forEach(aba => {
      if(aba.id === id) {
        aba.classList.remove('hidden');
      } else {
        aba.classList.add('hidden');
      }
    });

    // Atualiza botão ativo
    abasBtns.forEach(btn => {
      if(btn.dataset.tab === id) {
        btn.classList.add('category-active');
      } else {
        btn.classList.remove('category-active');
      }
    });
  }

  // Função para renderizar produtos filtrados
  function renderizarProdutos(categoria = 'todos') {
    // Limpa o container
    containerProdutos.innerHTML = '';

    // Filtra produtos
    const produtosFiltrados = categoria === 'todos'
      ? produtos
      : produtos.filter(p => p.categoria === categoria);

    // Cria cards
    produtosFiltrados.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nome}" class="product-img" />
        <h3 class="product-title">${prod.nome}</h3>
        <p class="product-price">R$ ${prod.preco.toFixed(2)}</p>
        <button class="btn-add-cart" data-id="${prod.id}">Adicionar ao carrinho</button>
      `;

      containerProdutos.appendChild(card);
    });

    // Adiciona evento nos botões de adicionar ao carrinho
    const botoesAdd = containerProdutos.querySelectorAll('.btn-add-cart');
    botoesAdd.forEach(botao => {
      botao.addEventListener('click', () => {
        carrinhoCount++;
        atualizarCarrinho();
        alert(`Produto adicionado ao carrinho! Total: ${carrinhoCount}`);
      });
    });
  }

  // Atualiza contador do carrinho no botão
  function atualizarCarrinho() {
    btnCarrinhoCount.textContent = carrinhoCount;
  }

  // Eventos para botões de categoria (filtrar produtos)
  btnsCategorias.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria = btn.dataset.categoria;
      
      // Atualiza botão ativo visual
      btnsCategorias.forEach(b => b.classList.remove('category-active'));
      btn.classList.add('category-active');

      renderizarProdutos(categoria);
    });
  });

  // Eventos para alternar abas (produtos/ofertas)
  abasBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mostrarAba(btn.dataset.tab);
    });
  });

  // Inicialização
  mostrarAba('produtos');
  renderizarProdutos();
  atualizarCarrinho();