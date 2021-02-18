var ha= document.querySelectorAll(".nav-link");
ha[1].addEventListener('click',ert);
var power=document.getElementById('power');
function ert(e){
    e.preventDefault();
    power.style.display="block"
}
for (var i=0 ; i < ha.length ;i++){
    ha[i].addEventListener('click',ert);
    var power=document.getElementById('power');
    function ert(e){
        e.preventDefault();
        power.style.display="block"
}
}