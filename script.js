const toggle=document.getElementById('toggleDark');
const body=document.querySelector('body');


// ecoute de l'événement après le click
toggle.addEventListener('click', function(){

    /*Si un seul argument est présent : change la présence d'une classe dans la liste. 
    Si la classe existe, alors la supprime et renvoie false, dans le cas inverse, 
    ajoute cette classe et retourne true. */
    this.classList.toggle('bi-moon-fill'); //le classList c'est pour modifier la classe d'un élément HTML

    // si on est en mode claire...
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white';
        body.style.color='black';
        body.style.transition='2s';
    }else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='2s';
    }
})