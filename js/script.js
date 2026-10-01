const tela = document.getElementById("myCanvas")
const telaJogo = tela.getContext("2d")

let bg = new BG(0,0,500,750,"img/bg.png")
let bg2 = new BG(0,-750,500,750,"img/bg.png")
let abelha = new Abelha(200, 500, 100, 100, "img/bee1.png")
let aranha = new Aranha(100, 100, 100, 100, "img/spider1.png")

document.addEventListener("keydown", function(e){
    if(e.key == "a"){
        abelha.dir = -1
    }
    if(e.key == "d"){
        abelha.dir = 1
    }
})

document.addEventListener("keyup", function(e){
    if(e.key == "a"){
        abelha.dir = 0
    }
    if(e.key == "d"){
        abelha.dir = 0
    }
})

function draw(){
    bg.desenharObj()
    bg2.desenharObj()
    abelha.desenharObj()
    aranha.desenharObj()
}

function update(){
    abelha.mover()
    aranha.mover()
    bg.mover(3,750,0)
    bg2.mover(3,0,-750)
}

function main(){
    telaJogo.clearRect(0, 0, 500, 750)
    update()
    draw()
}

setInterval(main,10)