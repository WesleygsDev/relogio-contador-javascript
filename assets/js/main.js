// inicio
function relogio()
{
    let inicio = document.querySelector("#inicio");

// Declaração de todas as variáveis
let iniciar = document.querySelector("#iniciar");
let pausar = document.querySelector("#pausar");
let zerar = document.querySelector("#zerar");

//Pegando a hora atual
function horaAtual(segundos)
{
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone:"UTC"
    });
};

let timer;
let segundos = 0;


// Controlhe inicia o temporizados

iniciar.addEventListener("click", function(){
     timer = setInterval(function(){
        inicio.innerHTML = horaAtual(segundos++);
        inicio.classList.remove("pausado");
        return        
    },1000);

});

pausar.addEventListener("click", function(){
    setTimeout(function(){
        clearInterval(timer);
        inicio.classList.add("pausado");
    })
});

zerar.addEventListener("click", function(){
    clearInterval(timer);
    inicio.innerHTML = "00:00:00";
    inicio.classList.remove("pausado");
    segundos = 0;
});

}
relogio();
