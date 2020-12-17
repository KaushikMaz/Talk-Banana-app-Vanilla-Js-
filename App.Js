// console.log("Script is working from a  different file")
var btnTranslate=document.querySelector("#btn-Translate");
var textInput = document.querySelector("#text-input");
function clickhandler()
{console.log("Clicked!");
console.log("input",textInput.value);
};

btnTranslate.addEventListener("click", clickhandler);



