// console.log("Script is working from a  different file")
var btnTranslate=document.querySelector("#btn-Translate");
var textInput = document.querySelector("#text-input");
var outputDiv=document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + 
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
};
// console.log(textInput)
// outputDiv.innertext="Kaushik Mazumdar"
// function clickhandler()
// {console.log("Clicked!");
// console.log("input",textInput.value);
// outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
// };
function clickhandler(){
    var inputText = txtInput.value; // taking input
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;********************************
            outputDiv.innerText = translatedText; // output
             })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickhandler);
// btnTranslate.addEventListener("click", clickhandler);

// document.queryselector("textarea")
// #btn-primary
// #input-btn
// "input(name=translator)"


