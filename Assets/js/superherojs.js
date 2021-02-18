var links= document.querySelectorAll(".nav-link");
var power=document.getElementById('power');
for (var i=0 ; i < links.length ;i++){
    links[i].addEventListener('click',ert);

    function ert(e){
        e.preventDefault();
        power.style.display="block"
}
}
