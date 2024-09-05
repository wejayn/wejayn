let xBolinha = 300;
let yBolinha = 200;
let diametro = 30  
let raio = diametro / 2
let xRaquete = 10;
let yRaquete = 200;
let velocidadexBolinha = 10;
let velocidadeyBolinha = 10;
let comprimentoRaquete = 20
let larguraRaquete = 100
let xraqueteoponente = 570;
let yraqueteoponente = 200;
let comprimentoraqueteoponente = 20
let larguraraqueteoponente = 100
let meuspontos = 0
let pontosdooponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  colisaoBorda();
   mostrarRaquete ();
  movimentoMinhaRaquete();
  verificaColisaoRaquete ();
  mostrarraqueteoponente ();
  movimentoRaqueteOponente ();
  verificaColisaoRaqueteOponente ();
  placar()
  marcaponto ()
  bolinhaNaoFicaPresa()
}

  function mostrarBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  function movimentoBolinha() {
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
  }
  function colisaoBorda() {
    if (yBolinha > height || yBolinha < 0) {
      velocidadeyBolinha *= -1;
    }
    if (xBolinha > width || xBolinha < 0) {
      velocidadexBolinha *= -1;
    }
 
}
  function mostrarRaquete () {
  rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);

}

  function movimentoMinhaRaquete ( ){
 if (keyIsDown(87)){
   yRaquete -= 10
 }
   if (keyIsDown(83)){
   yRaquete += 10
 }
}
  function verificaColisaoRaquete () {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha- raio < yRaquete + larguraRaquete && yBolinha + raio > yRaquete) {
    velocidadexBolinha *= -1
  }
}
 function mostrarraqueteoponente () {
    rect (xraqueteoponente, yraqueteoponente, comprimentoraqueteoponente, larguraraqueteoponente)
 }
  function movimentoRaqueteOponente ( ) {
 if (keyIsDown(UP_ARROW)){
   yraqueteoponente -= 10
 }
   if (keyIsDown(DOWN_ARROW)){
   yraqueteoponente += 10
 }
}
  function verificaColisaoRaqueteOponente () {
  if (xBolinha - raio > xraqueteoponente - comprimentoraqueteoponente && yBolinha- raio < yraqueteoponente + larguraraqueteoponente && yBolinha + raio > yraqueteoponente) {
    velocidadexBolinha *= -1
  }
}
function placar() {
  textAlign (CENTER)
  textSize (35)
  fill (255)
  text (meuspontos, 250, 35)
  text (pontosdooponente, 350, 35)
}
function marcaponto () {
  if (xBolinha > 600) {
    meuspontos += 1
  }
  if (xBolinha < 0){
  pontosdooponente +=1
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha < 0){
    xBolinha = 15
    }
if (xBolinha - raio > 599)
xBolinha = 577
}


