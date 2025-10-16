// botões de tempo
const button10s = document.querySelector("#button10s"),
      button20s = document.querySelector("#button20s"),
      button30s = document.querySelector("#button30s");

// modal
const modal = document.querySelector("#modal"),
      clicksModal = document.querySelector("#clicksModal"),
      fecharModal = document.querySelector("#fecharModal");

// número da contagem da tela
const countNumber = document.querySelector("#countNumber");

// botão click
const buttonClick = document.querySelector("#buttonClick");

// segundos
const seconds = document.querySelector("#seconds");

// contagens
let count = 0;
let timer;
let timerAtivo = false;

let time10s = 10;
let time20s = 20;
let time30s = 30;

// eventos
button10s.addEventListener("click", () => {
    if (timerAtivo) return;
    timerAtivo = true;
    button10s.disabled = true;
    countNumber.textContent = 0;
    count = 0;
    time10s = 10
    seconds.textContent = "Tempo: " + time10s + "s"

    timer = setInterval(() => {
        time10s--;
        seconds.textContent = "Tempo: " + time10s + "s";

        if (time10s <= 0){
            clearInterval(timer);
            button10s.disabled = false;
            timerAtivo = false;
            mensagem();
        }
        
    }, 1000)
});

button20s.addEventListener("click", () => {
    if (timerAtivo) return;
    timerAtivo = true;
    button20s.disabled = true;
    countNumber.textContent = 0;
    count = 0;
    time20s = 20
    seconds.textContent = "Tempo: " + time20s + "s"

    timer = setInterval(() => {
        time20s--;
        seconds.textContent = "Tempo: " + time20s + "s";

        if (time20s <= 0) {
            clearInterval(timer)
            button20s.disabled = false;
            timerAtivo = false;
            mensagem()
        }
    }, 1000)
});

button30s.addEventListener("click", () => {
    if (timerAtivo) return;
    timerAtivo = true;
    button30s.disabled = true;
    countNumber.textContent = 0;
    count = 0;
    time30s = 30
    seconds.textContent = "Tempo: " + time30s + "s"

    timer = setInterval(() => {
        time30s--;
        seconds.textContent = "Tempo: " + time30s + "s";
        
        if (time30s <= 0) {
            clearInterval(timer)
            button30s.disabled = false;
            timerAtivo = false
            mensagem();
        }
    }, 1000)
});

buttonClick.addEventListener("click", () => {
    count++;
    countNumber.textContent = count
})

// função e evento do modal
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
})

function mensagem() {
    modal.style.display = "flex";
    clicksModal.textContent = "Quantidade de cliques: " + count;
    count = 0;
    countNumber.textContent = count;
}