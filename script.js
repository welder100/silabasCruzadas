// VARIÁVEIS GLOBAIS
let GarrTodasSilabas = [];
let GarrSilabasOpcionais = [];
let Gcruzada = new Map();
let GquestaoAtual = 0;
let GquadrinhoSelecionado = "";

// ROTINA PRINCIPAL
const idCruzada = localStorage.getItem("cruzadaCorrente") || 'cruzada1';
Gcruzada = carregaCruzada(idCruzada); // Converte para inteiro e carrega a cruzada
GarrTodasSilabas = compilaTodasAsSilabas();
GarrSilabasOpcionais = geraSilabasOpcionais();

montaLayout();
montaCruzada();
carregarEstadoSalvo();
apresentaQuestao(GquestaoAtual);
destacaQuadrinhoEscolhido(GquestaoAtual, 0);
apresentaOpcoesDeSilabas(GquestaoAtual);

// FUNÇÕES
function carregarEstadoSalvo() {
  // Recupera o estado salvo do localStorage
  const cruzadasSalvas = JSON.parse(localStorage.getItem("cruzadasSalvas")) || {};
  const estadoCruzada = cruzadasSalvas[idCruzada]?.estado;

  // Se não houver estado salvo, retorna sem fazer nada
  if (!estadoCruzada) {
    console.log("Nenhum estado salvo encontrado para a cruzada:", idCruzada);
    return;
  }

  // Percorre o estado e preenche os quadrinhos
  for (let l = 0; l < estadoCruzada.length; l++) {
    for (let c = 0; c < estadoCruzada[l].length; c++) {
      const silaba = estadoCruzada[l][c];

      // Ignora quadrinhos pretos (marcados com #)
      if (silaba !== "#") {
        const quadrinho = document.getElementById(`${l}-${c}`);

        // Se o quadrinho existir e a sílaba não for vazia, preenche o quadrinho
        if (quadrinho && silaba !== "") {
          quadrinho.textContent = silaba;
        }
      }
    }
  }

  console.log("Estado da cruzada carregado com sucesso:", idCruzada);
}

function geraSilabasOpcionais() {
  let arrFinal = [];
  let silaba = "";
  let arrSilabas = [];

  for (let a = 0; a < Gcruzada.size; a++) {
    arrSilabas = Gcruzada.get(a)['resposta'].split('-');
    let falta = 8 - arrSilabas.length;
    for (let i = 0; i < falta; i++) {
      do {
        silaba = GarrTodasSilabas[Math.floor(Math.random() * GarrTodasSilabas.length)];
      } while (arrSilabas.includes(silaba))
      arrSilabas.push(silaba);
    }
    arrSilabas = shuffleArray(arrSilabas);
    arrFinal.push(arrSilabas);
  }
  return arrFinal;
}

function compilaTodasAsSilabas() {
  let arrSilabasDaPalavra = [];
  let arrTemp = [];

  for (let a = 0; a < Gcruzada.size; a++) {
    arrTemp = Gcruzada.get(a)['resposta'].split('-');
    for (let b = 0; b < arrTemp.length; b++) {
      arrSilabasDaPalavra.push(arrTemp[b]);
    }
  }
  let arrSetUnico = new Set(arrSilabasDaPalavra);
  return [...arrSetUnico];
}

function borrachaClick() {
  insereSilabaNoQuadrinho("");
}

function mostrarRespostaModal() {
  console.log("Botão Visão clicado...");
  const questao = Gcruzada.get(GquestaoAtual);
  const resposta = questao['resposta']; // Remove hífens para melhor leitura
  document.getElementById("respostaTexto").textContent = `${resposta}`;
  document.getElementById("respostaModal").style.display = "block";

  // Esconde o modal após 3 segundos
  setTimeout(() => {
    document.getElementById("respostaModal").style.display = "none";
  }, 2000);
}

function configClick() {
  // Recupera o ID da cruzada corrente do localStorage
  const idCruzadaCorrente = localStorage.getItem("cruzadaCorrente");

  if (!idCruzadaCorrente) {
    console.error("Nenhuma cruzada está selecionada.");
    return;
  }

  // Recupera o estado atual da cruzada (matriz de sílabas)
  const estadoCruzada = obterEstadoCruzada();

  if (!estadoCruzada) {
    console.error("Não foi possível obter o estado da cruzada.");
    return;
  }

  // Recupera ou inicializa o objeto de cruzadas salvas
  const cruzadasSalvas = JSON.parse(localStorage.getItem("cruzadasSalvas")) || {};

  // Atualiza o estado da cruzada corrente
  cruzadasSalvas[idCruzadaCorrente] = {
    id: idCruzadaCorrente,
    estado: estadoCruzada
  };

  // Salva o objeto atualizado no localStorage
  localStorage.setItem("cruzadasSalvas", JSON.stringify(cruzadasSalvas));

  // Redireciona para a página de configurações
  window.location.href = "lista.html";
}

function obterEstadoCruzada() {
  const estado = []; // Matriz que armazenará o estado da cruzada

  // Percorre as 12 linhas do grid
  for (let l = 0; l < 12; l++) {
    const linhaEstado = []; // Array que armazenará o estado da linha atual

    // Percorre as 6 colunas do grid
    for (let c = 0; c < 6; c++) {
      // Obtém a célula pelo ID (formato "l-c")
      const celula = document.getElementById(`${l}-${c}`);

      // Verifica se o quadrinho é preto (tem a classe 'quadrinho-preto')
      if (celula.classList.contains("quadrinho-preto")) {
        linhaEstado.push("#"); // Marca o quadrinho preto com #
      } else {
        // Obtém o conteúdo da célula (sílaba) ou "" se estiver vazia
        const silaba = celula.textContent.trim();
        linhaEstado.push(silaba || "");
      }
    }

    // Adiciona a linha ao estado da cruzada
    estado.push(linhaEstado);
  }

  return estado; // Retorna a matriz de estado
}

function homeClick() {
  window.location.href = "index.html";
}

function passaUmQuadrinhoAdiante() {
  let orientacao = Gcruzada.get(GquestaoAtual)['orientacao'];
  let linha = GquadrinhoSelecionado.split("-")[0];
  let coluna = GquadrinhoSelecionado.split("-")[1];
  let ordem = 0;

  if (orientacao == "hor") {
    ordem = coluna - Gcruzada.get(GquestaoAtual)['coluna'];
  } else if (orientacao == "ver") {
    ordem = linha - Gcruzada.get(GquestaoAtual)['linha'];
  }

  if (ordem + 1 < quantasSilabas(Gcruzada.get(GquestaoAtual)['resposta'])) {
    ordem++;
    destacaQuadrinhos(GquestaoAtual, "rgb(249, 251, 106)");
    destacaQuadrinhoEscolhido(GquestaoAtual, ordem);
  }
}

function clicouNoQuadrinho(linha, coluna) {
  let pai = document.getElementById(linha + '-' + coluna);
  let nomeSeta = "";
  let setasNoQuadrinho = [];
  if (pai && pai.children.length > 0) {
    // Coleta todas as setas no quadrinho
    for (let i = 0; i < pai.children.length; i++) {
      if (pai.children[i].className.includes("setinha")) {
        setasNoQuadrinho.push(pai.children[i].className);
      }
    }
    console.log("Setas no quadrinho:", setasNoQuadrinho);
  }

  // Encontra todas as questões que passam pelo quadrinho clicado
  let questoesSobrepostas = [];
  for (let a = 0; a < Gcruzada.size; a++) {
    const questao = Gcruzada.get(a);
    const lInicial = questao['linha'];
    const cInicial = questao['coluna'];
    const orientacao = questao['orientacao'];
    const tamanho = quantasSilabas(questao['resposta']);

    if (orientacao === 'hor' && linha === lInicial && coluna >= cInicial && coluna < cInicial + tamanho) {
      questoesSobrepostas.push({ indice: a, orientacao: 'hor', linhaInicial: lInicial, colunaInicial: cInicial });
    } else if (orientacao === 'ver' && coluna === cInicial && linha >= lInicial && linha < lInicial + tamanho) {
      questoesSobrepostas.push({ indice: a, orientacao: 'ver', linhaInicial: lInicial, colunaInicial: cInicial });
    }
  }

  // Se não houver questões, não faz nada
  if (questoesSobrepostas.length === 0) {
    return;
  }

  // Determina qual questão deve ser selecionada com base nas setas
  let novaQuestao = -1;

  // Caso 1: Há duas setas no quadrinho (horizontal e vertical)
  if (setasNoQuadrinho.includes("setinhaParaDireita") && setasNoQuadrinho.includes("setinhaParaBaixo")) {
    // Encontra a questão atual
    const indiceAtual = questoesSobrepostas.findIndex(q => q.indice === GquestaoAtual);

    // Alterna entre as questões horizontal e vertical que começam no quadrinho
    if (indiceAtual >= 0) {
      const proximoIndice = (indiceAtual + 1) % questoesSobrepostas.length;
      novaQuestao = questoesSobrepostas[proximoIndice].indice;
    } else {
      // Seleciona a primeira questão que começa no quadrinho
      novaQuestao = questoesSobrepostas[0].indice;
    }
  }
  // Caso 2: Há apenas uma seta (horizontal ou vertical)
  else if (setasNoQuadrinho.includes("setinhaParaDireita")) {
    // Seleciona a questão horizontal que começa no quadrinho clicado
    const questoesHorizontais = questoesSobrepostas.filter(q => q.orientacao === 'hor' && q.linhaInicial === linha && q.colunaInicial === coluna);
    if (questoesHorizontais.length > 0) {
      novaQuestao = questoesHorizontais[0].indice;
    }
  } else if (setasNoQuadrinho.includes("setinhaParaBaixo")) {
    // Seleciona a questão vertical que começa no quadrinho clicado
    const questoesVerticais = questoesSobrepostas.filter(q => q.orientacao === 'ver' && q.linhaInicial === linha && q.colunaInicial === coluna);
    if (questoesVerticais.length > 0) {
      novaQuestao = questoesVerticais[0].indice;
    }
  }
  // Caso 3: Não há seta
  else {
    // Alterna entre as questões sobrepostas
    const indiceAtual = questoesSobrepostas.findIndex(q => q.indice === GquestaoAtual);
    if (indiceAtual >= 0) {
      const proximoIndice = (indiceAtual + 1) % questoesSobrepostas.length;
      novaQuestao = questoesSobrepostas[proximoIndice].indice;
    } else {
      novaQuestao = questoesSobrepostas[0].indice;
    }
  }

  // Atualiza a questão atual e destaca os quadrinhos
  if (novaQuestao >= 0) {
    destacaQuadrinhos(GquestaoAtual, 'white');
    GquestaoAtual = novaQuestao;
    destacaQuadrinhos(GquestaoAtual, "LightGoldenRodYellow");
    apresentaQuestao(GquestaoAtual);

    // Calcula a posição do quadrinho clicado na nova questão
    const questao = Gcruzada.get(GquestaoAtual);
    const lInicial = questao['linha'];
    const cInicial = questao['coluna'];
    const orientacao = questao['orientacao'];
    let ordem = 0;

    if (orientacao === 'hor') {
      ordem = coluna - cInicial;
    } else if (orientacao === 'ver') {
      ordem = linha - lInicial;
    }

    destacaQuadrinhoEscolhido(GquestaoAtual, ordem);
    apresentaOpcoesDeSilabas(GquestaoAtual);
  }
}

function passaQuestao(sentido) {
  destacaQuadrinhos(GquestaoAtual, 'white');
  switch (sentido) {
    case 'proxima':
      if (GquestaoAtual < Gcruzada.size - 1) {
        GquestaoAtual++;
      } else {
        GquestaoAtual = 0;
      }
      break;
    case 'anterior':
      if (GquestaoAtual > 0) {
        GquestaoAtual--;
      } else {
        GquestaoAtual = Gcruzada.size - 1;
      }
      break;
  }
  apresentaQuestao(GquestaoAtual);
  destacaQuadrinhoEscolhido(GquestaoAtual, 0);
  apresentaOpcoesDeSilabas(GquestaoAtual);
}

function apresentaOpcoesDeSilabas(nQ) {
  let arrSilabasOpcoes = GarrSilabasOpcionais[nQ];
  let cont = 0;
  for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 4; c++) {
      document.getElementById("b" + l + "-" + c).innerText = arrSilabasOpcoes[cont];
      cont++;
    }
  }
}

function destacaQuadrinhoEscolhido(nQuestao, nOrdem) {
  let l = Gcruzada.get(nQuestao)['linha'];
  let c = Gcruzada.get(nQuestao)['coluna'];
  if (Gcruzada.get(nQuestao)['orientacao'] == 'hor') {
    c += nOrdem;
  } else {
    l += nOrdem;
  }
  GquadrinhoSelecionado = l + "-" + c;
  document.getElementById(GquadrinhoSelecionado).style.backgroundColor = "#FBDD35";
  document.getElementById(GquadrinhoSelecionado).style.borderStyle = "inset";
  document.getElementById(GquadrinhoSelecionado).style.borderColor = "Palegreen";
  document.getElementById(GquadrinhoSelecionado).style.borderWidth = 4;
}

function apresentaQuestao(nQ) {
  document.getElementById("questao").innerHTML = Gcruzada.get(nQ)['pergunta'];
  destacaQuadrinhos(nQ, "rgb(249, 251, 106)");
}

function clicouSilabaOpcional(qual) {
  let silaba = document.getElementById(qual).innerText;
  insereSilabaNoQuadrinho(silaba);
  passaUmQuadrinhoAdiante();
}

function insereSilabaNoQuadrinho(silaba) {
  let pai = document.getElementById(GquadrinhoSelecionado);
  let setinhaParaDireita = pai.querySelector(".setinhaParaDireita");
  let setinhaParaBaixo = pai.querySelector(".setinhaParaBaixo");
  let temSetinhaParaDireita = false;
  if (setinhaParaDireita !== null) {
    temSetinhaParaDireita = true;
  }
  let temSetinhaParaBaixo = false;
  if (setinhaParaBaixo !== null) {
    temSetinhaParaBaixo = true;
  }
  while (pai.hasChildNodes()) {
    pai.removeChild(pai.firstChild);
  }
  pai.innerHTML = silaba;
  if (temSetinhaParaBaixo) {
    let im = document.createElement("img");
    im.setAttribute("class", "setinhaParaBaixo");
    im.setAttribute("src", "img/seta-para-baixo.png");
    pai.appendChild(im);
  }
  if (temSetinhaParaDireita) {
    let im1 = document.createElement("img");
    im1.setAttribute("class", "setinhaParaDireita");
    im1.setAttribute("src", "img/seta-para-direita.png");
    pai.appendChild(im1);
  }

  // Verifica se a cruzada foi concluída após inserir uma sílaba
  verificaConclusao();
}

function verificaConclusao() {
  let todasCorretas = true;

  for (let a = 0; a < Gcruzada.size; a++) {
    let questao = Gcruzada.get(a);
    let respostaCorreta = questao['resposta'].split('-');
    let lInicial = questao['linha'];
    let cInicial = questao['coluna'];
    let orientacao = questao['orientacao'];

    for (let i = 0; i < respostaCorreta.length; i++) {
      let l = lInicial;
      let c = cInicial;

      if (orientacao == 'hor') {
        c += i;
      } else {
        l += i;
      }

      let quadrinho = document.getElementById(l + "-" + c);
      if (quadrinho.innerText.trim() !== respostaCorreta[i]) {
        todasCorretas = false;
        break;
      }
    }

    if (!todasCorretas) {
      break;
    }
  }

  if (todasCorretas) {
    exibirMensagemDeConclusao();
  }
}


function exibirMensagemDeConclusao() {
// Exibe o modal de conclusão
document.getElementById("conclusaoModal").style.display = "block";

// Esconde o modal após 3 segundos
setTimeout(() => {
document.getElementById("conclusaoModal").style.display = "none";
}, 3000);
}

function destacaQuadrinhos(nCruz, cor) {
  let qSilabas = quantasSilabas(Gcruzada.get(nCruz)['resposta']);
  let lInicial = Gcruzada.get(nCruz)['linha'];
  let cInicial = Gcruzada.get(nCruz)['coluna'];
  let l = lInicial;
  let c = cInicial;
  let orienta = Gcruzada.get(nCruz)['orientacao'];
  for (let a = 0; a < qSilabas; a++) {
    if (orienta == 'hor') {
      c = cInicial + a;
    } else {
      l = lInicial + a;
    }
    document.getElementById(l + "-" + c).style.backgroundColor = cor;
    document.getElementById(l + "-" + c).style.borderStyle = "solid";
    document.getElementById(l + "-" + c).style.borderWidth = 1;
    document.getElementById(l + "-" + c).style.borderColor = "gray";
  }
}

function montaCruzada() {
  for (let p = 0; p < Gcruzada.size; p++) {
    destacaQuadrinhos(p, "white");
    colocaSetinhaNoInicioDaPalavra(p);
  }
}

function colocaSetinhaNoInicioDaPalavra(nCruz) {
  let l = Gcruzada.get(nCruz)['linha'];
  let c = Gcruzada.get(nCruz)['coluna'];
  let im = document.createElement("img");
  if (Gcruzada.get(nCruz)['orientacao'] == 'hor') {
    im.setAttribute("class", "setinhaParaDireita");
    im.setAttribute("src", "img/seta-para-direita.png");
  } else {
    im.setAttribute("class", "setinhaParaBaixo");
    im.setAttribute("src", "img/seta-para-baixo.png");
  }
  document.getElementById(l + "-" + c).appendChild(im);
}

function quantasSilabas(p) {
  var cont = 0;
  for (var a = 0; a < p.length; a++) {
    if (p[a] == "-") {
      cont++;
    }
  }
  return cont + 1;
}

function retiraSilaba(palavra, qualSilaba) {
  var contTracos = 0;
  var sil = "";
  if (qualSilaba > quantasSilabas(palavra) - 1) {
    alert("qualSilaba > número de sílabas!");
  } else {
    for (var a = 0; a < palavra.length; a++) {
      if (palavra[a] == "-" || a == palavra.length - 1) {
        if (qualSilaba == contTracos) {
          if (palavra[a] != "-") {
            sil = sil + palavra[a];
          }
          return sil;
        } else {
          contTracos++;
          sil = "";
        }
      }
      if (palavra[a] != "-") {
        sil = sil + palavra[a];
      }
    }
  }
}

function getNomePorId(id) {
    // Procura a cruzada com o id especificado
    const cruzada = cruzadasDatabase.find(c => c.id === id);

    // Retorna o nome se encontrou, ou null caso contrário
    return cruzada ? cruzada.nome : null;
}

function montaLayout() {
  // Título
  document.getElementById('tituloTopo').innerHTML = "<h1>" + getNomePorId(idCruzada) + "</h1>";

  // Cria uma matriz para marcar os quadrinhos que fazem parte de alguma palavra
  const quadrinhosUsados = Array.from({ length: 12 }, () => Array(6).fill(false));

  // Marca os quadrinhos que fazem parte de alguma palavra
  for (let p = 0; p < Gcruzada.size; p++) {
    const questao = Gcruzada.get(p);
    const lInicial = questao['linha'];
    const cInicial = questao['coluna'];
    const orientacao = questao['orientacao'];
    const tamanho = quantasSilabas(questao['resposta']);

    for (let i = 0; i < tamanho; i++) {
      const l = orientacao === 'hor' ? lInicial : lInicial + i;
      const c = orientacao === 'hor' ? cInicial + i : cInicial;
      quadrinhosUsados[l][c] = true; // Marca o quadrinho como usado
    }
  }

  // Monta o grid
  for (let l = 0; l < 12; l++) {
    for (let c = 0; c < 6; c++) {
      const dv = document.createElement("div");
      dv.setAttribute("id", l + "-" + c);
      dv.setAttribute("class", "box");

      // Se o quadrinho não for usado por nenhuma palavra, marca como preto
      if (!quadrinhosUsados[l][c]) {
        dv.classList.add("quadrinho-preto"); // Adiciona a classe para quadrinhos pretos
      }

      dv.setAttribute("onclick", "clicouNoQuadrinho(" + l + "," + c + ")");
      document.getElementById("gridQuadriculado").appendChild(dv);
    }
  }

  // Monta o grid de sílabas opcionais
  for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 4; c++) {
      const dv = document.createElement("button");
      const idBotao = "b" + l + "-" + c;
      dv.setAttribute("id", idBotao);
      dv.setAttribute("class", "botaoSilaba");
      dv.setAttribute("onclick", "clicouSilabaOpcional(\"" + idBotao + "\")");
      document.getElementById("gridSilabasOpcionais").appendChild(dv);
    }
  }
}

// FUNÇÕES DE TERCEIROS
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//funções de depuração

// Adiciona um listener para o evento de teclado
document.addEventListener("keydown", function (event) {
// Verifica se alt + c foi pressionado COMPLETAR
if (event.altKey && event.key === "c") {
preencherTodasPalavras(); // Preenche todos os quadrinhos corretamente
}

// Verifica se Alt + A foi pressionado APAGAR
if (event.altKey && event.key === "a") {
apagarTodosQuadrinhos(); // Apaga o conteúdo de todos os quadrinhos
}
});

// Função para preencher automaticamente todos os quadrinhos corretamente
function preencherTodasPalavras() {
// Percorre todas as palavras da cruzada
for (let a = 0; a < Gcruzada.size; a++) {
const questao = Gcruzada.get(a);
const respostaCorreta = questao.resposta.split("-");
const lInicial = questao.linha;
const cInicial = questao.coluna;
const orientacao = questao.orientacao;

// Percorre cada sílaba da palavra
for (let i = 0; i < respostaCorreta.length; i++) {
  let l = lInicial;
  let c = cInicial;

  // Calcula a posição do quadrinho com base na orientação
  if (orientacao === "hor") {
    c += i;
  } else {
    l += i;
  }

  // Obtém o quadrinho pelo ID
  const quadrinho = document.getElementById(`${l}-${c}`);

  // Preserva as setinhas (se existirem)
  const setinhaParaDireita = quadrinho.querySelector(".setinhaParaDireita");
  const setinhaParaBaixo = quadrinho.querySelector(".setinhaParaBaixo");

  // Preenche o quadrinho com a sílaba correta
  quadrinho.innerHTML = respostaCorreta[i];

  // Adiciona as setinhas de volta, se existirem
  if (setinhaParaDireita) {
    quadrinho.appendChild(setinhaParaDireita);
  }
  if (setinhaParaBaixo) {
    quadrinho.appendChild(setinhaParaBaixo);
  }
}
}

console.log("Depuração: Todos os quadrinhos foram preenchidos corretamente.");
}

// Função para apagar o conteúdo de todos os quadrinhos
function apagarTodosQuadrinhos() {
// Percorre todas as palavras da cruzada
for (let a = 0; a < Gcruzada.size; a++) {
const questao = Gcruzada.get(a);
const respostaCorreta = questao.resposta.split("-");
const lInicial = questao.linha;
const cInicial = questao.coluna;
const orientacao = questao.orientacao;

// Percorre cada sílaba da palavra
for (let i = 0; i < respostaCorreta.length; i++) {
  let l = lInicial;
  let c = cInicial;

  // Calcula a posição do quadrinho com base na orientação
  if (orientacao === "hor") {
    c += i;
  } else {
    l += i;
  }

  // Obtém o quadrinho pelo ID
  const quadrinho = document.getElementById(`${l}-${c}`);

  // Preserva as setinhas (se existirem)
  const setinhaParaDireita = quadrinho.querySelector(".setinhaParaDireita");
  const setinhaParaBaixo = quadrinho.querySelector(".setinhaParaBaixo");

  // Apaga o conteúdo do quadrinho
  quadrinho.innerHTML = "";

  // Adiciona as setinhas de volta, se existirem
  if (setinhaParaDireita) {
    quadrinho.appendChild(setinhaParaDireita);
  }
  if (setinhaParaBaixo) {
    quadrinho.appendChild(setinhaParaBaixo);
  }
}
}

console.log("Depuração: Todos os quadrinhos foram apagados.");
}

// Função para carregar uma cruzada específica pelo ID (formato 'cruzada1', 'cruzada2', etc.)
function carregaCruzada(id) {
// Extrai o número do ID (remove a parte 'cruzada' e converte para número)
//const numero = parseInt(id.replace("cruzada", ""), 10);

// Busca a cruzada no banco de dados pelo número
const cruzada = cruzadasDatabase.find(c => c.id === id);

if (cruzada) {
return cruzada.palavras(); // Retorna o Map com as palavras da cruzada
} else {
console.error(`Cruzada com ID ${id} não encontrada.`);
return null; // Retorna null se a cruzada não existir
}
}
