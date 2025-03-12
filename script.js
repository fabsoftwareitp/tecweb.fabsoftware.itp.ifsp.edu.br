let corpo = document.body;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Linha {
    constructor(x, y, comprimento, velocidade, direcao, cor) {
        this.x = x;
        this.y = y;
        this.comprimento = comprimento;
        this.velocidade = velocidade;
        this.direcao = direcao;
        // this.cor = cor;
        this.rastro = [];
        this.rastroMaxComprimento = 50;
    }

    atualizarCor() {
        if (corpo.classList.contains("modo-escuro")) {
            this.cor = "#4F3678";
        } else {
            this.cor = "#FFFFFF";
        }
    }
    

    draw() {
        this.rastro.forEach((pos, index) => {
            const esvanecimento = (1 - index / this.rastro.length) * 0.3;
            ctx.beginPath();

            if (corpo.classList.contains("modo-escuro")) {
                ctx.strokeStyle = `rgba(79, 54, 120, ${esvanecimento})`;
            } else {
                ctx.strokeStyle = `rgba(255, 255, 255, ${esvanecimento})`;
            }
            
            ctx.lineWidth = 1.5;
            if (this.direcao === "horizontal") {
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(pos.x + this.comprimento, pos.y);
            } else {
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(pos.x, pos.y + this.comprimento);
            }
            ctx.stroke();
        });

        ctx.beginPath();
        ctx.strokeStyle = this.cor;
        ctx.lineWidth = 2;

        if (this.direcao === "horizontal") {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.comprimento, this.y);
        } else {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.comprimento);
        }
        ctx.stroke();
    }

    update() {
        this.rastro.unshift({ x: this.x, y: this.y });
        if (this.rastro.length > this.rastroMaxComprimento) {
            this.rastro.pop();
        }

        if (this.direcao === "horizontal") {
            this.x += this.velocidade;

            if (this.velocidade > 0 && this.x > canvas.width) {
                this.x = -this.comprimento;
            }

            if (this.velocidade < 0 && this.x + this.comprimento < 0) {
                this.x = canvas.width;
            }
        } else {
            this.y += this.velocidade;

            if (this.velocidade > 0 && this.y > canvas.height) {
                this.y = -this.comprimento;
            }

            if (this.velocidade < 0 && this.y + this.comprimento < 0) {
                this.y = canvas.height;
            }
        }

        this.draw();
    }
}

let linhas = [];
let totalLinhas = 50;
let intervaloAdicao;

function criarLinhaGradualmente() {
    if (linhas.length < totalLinhas) {
        const comprimento = Math.random() * 150 + 50;
        let velocidade = Math.random() * 2 + 0.5;
        let cor;
        const borda = Math.floor(Math.random() * 4);
        let x, y, direcao;

        if (corpo.classList.contains("modo-escuro")) {
            cor = "rgba(79, 54, 120, 1)";
        } else {
            cor = "rgba(255, 255, 255, 1)";
        }
        
        if (borda === 0) {
            x = -comprimento;
            y = Math.random() * canvas.height;
            direcao = "horizontal";
        } else if (borda === 1) {
            x = canvas.width;
            y = Math.random() * canvas.height;
            direcao = "horizontal";
            velocidade = -velocidade;
        } else if (borda === 2) {
            x = Math.random() * canvas.width;
            y = -comprimento;
            direcao = "vertical";
        } else {
            x = Math.random() * canvas.width;
            y = canvas.height;
            direcao = "vertical";
            velocidade = -velocidade;
        }

        linhas.push(new Linha(x, y, comprimento, velocidade, direcao, cor));
    } else {
        clearInterval(intervaloAdicao);
    }
}

function animate() {
    if (corpo.classList.contains("modo-escuro")) {
        ctx.fillStyle = "#000"; 
    } else {
        ctx.fillStyle = "#25163D"; 
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    linhas.forEach(linha => linha.update());
    requestAnimationFrame(animate);
}

function atualizarCores() {
    linhas.forEach(linha => linha.atualizarCor());
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    linhas = [];
    clearInterval(intervaloAdicao);
    intervaloAdicao = setInterval(criarLinhaGradualmente, 100);
});

intervaloAdicao = setInterval(criarLinhaGradualmente, 100);
animate();