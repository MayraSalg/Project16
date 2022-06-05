let popUp = document.getElementById("mypopup");
let popUpToggle = document.getElementById("myBtn");
let popUpClose = document.getElementById("close");
let replyOpen = document.querySelector(".action-buttons__message");
let replyClose = document.querySelector(".close-button-img");
let reply = document.querySelector(".reply");
let callBackOpen = document.querySelector(".action-buttons__tel");
let callBackText = document.querySelector(".callback-text");
let replyText = document.querySelector(".reply-text");
popUpToggle.onclick = function (){
    popUp.style.display="flex";
    popUp.style.width="320px"; //открыть главное меню
    popUp.style.height="1024px";

};

popUpClose.onclick = function (){
    popUp.style.display="none";
    popUp.style.width="0px";//закрыть главное меню
    popUp.style.height="0px";

}
replyOpen.onclick = function (){
    reply.style.display="inline";
    reply.style.position="absolute";
    popUp.style.display="none";//открыть reply
    popUp.style.width="0px";
    popUp.style.height="0px";
}
replyClose.onclick = function (){
    reply.style.display="none"; //закрыть reply
}
callBackOpen.onclick = function (){
    reply.style.display="inline";
    reply.style.position="absolute"; //открыть обратный звонок
    popUp.style.display="none";
    popUp.style.width="0px";
    popUp.style.height="0px";

}