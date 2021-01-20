var btnTranslate=document.querySelector("#btn-translate");
var input_txt=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
console.log(input_txt)
function clickHandler(){
    outputDiv.innerText="ajsjsjsjs " + input_txt.value;
};

btnTranslate.addEventListener("click",clickHandler)
// outputDiv.innerText="Kaushik Mazumdar"
console.log(outputDiv)