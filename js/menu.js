let popUp = document.getElementById("mypopup");
let popUpToggle = document.getElementById("myBtn");
let popUpClose = document.getElementById("close");
let reply = document.querySelector(".action-buttons__message")
popUpToggle.onclick = function (){
    popUp.style.display="flex";
    popUp.style.width="320px";
    popUp.style.height="1024px";

};

popUpClose.onclick = function (){
    popUp.style.display="none";
    popUp.style.width="0px";
    popUp.style.height="0px";

}