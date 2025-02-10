const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const div = document.getElementById("caixa");
const main = document.getElementById("main");
const text = document.getElementById("promo-text");


input.addEventListener("input", () =>{
    if(input.value.trim() === ""){
      btn.classList.remove("done");
      btn.classList.add("block");
    }else{
       btn.classList.remove("block");
       btn.classList.add("done");
    }
})

input.addEventListener("focus", () => {
  input.classList.add("taller-input");
});

input.addEventListener("blur", () => {
  input.classList.remove("taller-input");
});

btn.addEventListener("click", ()=>{
  const number = Math.floor(Math.random() * 999) + 1;
  const cpf = input.value;
  const button = document.createElement("button");
  text.style.display = 'none';
  button.classList.add("button-sushi");
  button.textContent = 'Fechar';
  main.style.display = "none";
  div.style.display = "flex";
  div.innerHTML = '<h1>Olá usuário ' + cpf + ', está afim de um 🍣?</h1> <br> ' + '<h3 class = "space-between">Seu número premiado é: ' + number + '</h3>';
  div.append(button);
  
  button.addEventListener("click",() => {
    window.location.reload();
  })
})

