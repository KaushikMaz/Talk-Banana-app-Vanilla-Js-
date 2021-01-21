var btnTranslate=document.querySelector("#btn-translate");
var input_txt=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"
function TranslateURL(INPUT){
    return serverURL + "?" + "text="+ INPUT;
};
function errorhandler(error){
    console.log("error ocurred",error);
    alert("Something happened!! Please try again later")
}
function clickHandler(){
    // outputDiv.innerText="ajsjsjsjs " + input_txt.value;
    var inputTxt=input_txt.value;
   
    fetch(TranslateURL(inputTxt))
        .then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorhandler) 

};



btnTranslate.addEventListener("click",clickHandler)
// outputDiv.innerText="Kaushik Mazumdar"
