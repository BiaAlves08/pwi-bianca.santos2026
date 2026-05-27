
// Exibe o iframe e esconde o resto
function mostrarConteudo() {
  document.getElementById("imagemInicial").style.display = "none";
  
  // Pausa e esconde o vídeo caso ele esteja aberto
  const video = document.getElementById("playerVideo");
  video.style.display = "none";
  video.pause();

  document.querySelector("iframe").style.display = "block";
}

// Controla a exibição do player de vídeo local
function mostrarVideo(caminhoVideo) {
  document.getElementById("imagemInicial").style.display = "none";
  document.querySelector("iframe").style.display = "none"; 
  
  const video = document.getElementById("playerVideo");
  const source = document.getElementById("videoSource");
  
  // Atualiza o arquivo de origem e recarrega o player
  source.src = caminhoVideo;
  video.load(); 
  video.style.display = "block";
  video.play(); // Inicia o vídeo automaticamente ao clicar
}

// Reseta a tela para o painel principal
function voltarInicio() {
  document.getElementById("imagemInicial").style.display = "block";
  document.querySelector("iframe").style.display = "none";
  document.querySelector("iframe").src = "about:blank";
  
  const video = document.getElementById("playerVideo");
  video.style.display = "none";
  video.pause();
}

/* SCRIPT PARA FAZER OS NÚMEROS AUMENTAREM EM TEMPO REAL */
let phishingAtakes = 142305;
let dadosVazados = 1840;

setInterval(() => {
  // Sorteia um incremento aleatório para simular dinamismo
  phishingAtakes += Math.floor(Math.random() * 5) + 1;
  dadosVazados += Math.floor(Math.random() * 12) + 3;

  // Atualiza os elementos na tela com formatação de pontos decimais
  document.getElementById('contador-phishing').innerText = phishingAtakes.toLocaleString('pt-BR');
  document.getElementById('contador-vazamentos').innerText = dadosVazados.toLocaleString('pt-BR');
}, 1500); // Roda a cada 1.5 segundos