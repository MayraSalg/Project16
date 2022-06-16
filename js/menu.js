let popUp = document.getElementById("mypopup");
let popUpToggle = document.getElementById("myBtn");
let popUpClose = document.getElementById("close");
let replyOpen = document.querySelector(".action-buttons__message");
let replyClose = document.querySelector(".close-button-img");
let reply = document.querySelector(".reply");
let callBackOpen = document.querySelector(".action-buttons__tel");
let callBack = document.querySelector(".call-back");
let blur = document.querySelector(".line");
let callBackClose = document.querySelector(".close-button__call-back");
let telephone = document.querySelector(".telephone-button");
let message = document.querySelector(".message-button");
let pageWidth = window.innerWidth;


popUpToggle.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.width="320px";//закрыть главное меню
        popUp.style.height="1024px";
        popUp.style.boxShadow="none";
        blur.style.display="inline";
    }
    else{
    popUp.style.display="flex";
    popUp.style.width="320px"; //открыть главное меню
    popUp.style.height="1524px";
    blur.style.display="inline";}


};

popUpClose.onclick = function (){

    popUp.style.display="none";
    popUp.style.width="0px";//закрыть главное меню
    popUp.style.height="0px";
    blur.style.display="none";


}
blur.onclick = function (){
    if (pageWidth >=1120){
        callBack.style.display="none";
        reply.style.display="none";
        popUp.style.display="inline";
        blur.style.display="none";
    }
    else{
        callBack.style.display="none";
        reply.style.display="none";
        popUp.style.display="none";
        blur.style.display="none";}
}



replyOpen.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.width="320px";           //открыть обратный звонок
        popUp.style.height="1024px";
        popUp.style.boxShadow="none";
        popUp.style.zIndex="1";
        reply.style.display="inline-block";
        blur.style.display="inline";
        blur.style.marginLeft="-550px";
        reply.style.position="absolute";
    }
    else{
       reply.style.display="inline";
       reply.style.position="absolute";
       popUp.style.display="none";       //открыть reply
       popUp.style.width="0px";
        popUp.style.height="0px";
         blur.style.display="inline";}


 }
replyClose.onclick = function (){
    reply.style.display="none";
    blur.style.display="none";
    callBack.style.display="none";//закрыть reply
}
callBackOpen.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.width="320px";           //открыть обратный звонок
        popUp.style.height="1024px";
        popUp.style.boxShadow="none";
        callBack.style.display="inline-block";
        blur.style.display="inline";
        callBack.style.position="absolute";
    }
    else{
    callBack.style.display="inline-block";
    popUp.style.display="none";
    popUp.style.width="0px";
    popUp.style.height="0px";

    callBack.style.position="absolute";}
}
callBackClose.onclick = function (){
    callBack.style.display="none";
    blur.style.display="none";

}
telephone.onclick= function (){
    callBack.style.display="inline-block";
    //открыть обратный звонок
    callBack.style.position="absolute";
    blur.style.display="inline";

}
message.onclick= function (){
    reply.style.display="inline";
    reply.style.position="absolute";
    blur.style.display="inline";
}