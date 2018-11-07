// import { lchmod } from "fs";


// chat bot
(function () {
    $('.bot img').on('click', function(){
        $('#live-chat').fadeToggle(300, 'swing');
        $('.bot').hide();
    });
    $('.chat-close').on('click', function(e) {
        e.preventDefault();
        $('#live-chat').fadeOut(300);
        $('.bot').show();
    });
    $('fieldset').keypress(function(event){
        $('.chat-feedback').text("Your partner is typing…");
        console.log($(this));
    });
}) ();

// FAQ

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/************************Fullpage.js************************/
//Lancement du plugins FullPage.js
$(document).ready(function () {
    $('#fullpage').fullpage({
        //anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5'], //Ancre de chaque slide
        menu: '#menu', //Ancre de la Navbar
        loopTop: false, //Scroll en haut sur la premier page, envoie à la derniere page.
        navigation: true, //Affiche la navugation avec les points
        lazyLoading: false, 
        animateAnchor: false, //Pas de scroll lors du rechargement de la page sur une ancre
        scrollOverflow: false,  //Permet l'apparation d'une bar de scroll unique à chaque slide
        scrollingSpeed: 1000,    //Vitesse du scrool
    });
    

});

// ===== Scroll to Top ==== 
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});

/************************Modal Connexion************************/
//Fonction Modal-LightBox
function modal( id, idFlou, action ) {
    if(action==true)
    {   document.getElementById( id ).style.display = "block";
        flou(idFlou,true);
        //Bug: Obliger d'utiliser TimeOut
        window.setTimeout(function(){document.getElementById('carreConnexion').className = "effets";}, 1);
        window.setTimeout(function(){document.getElementById('carreInscription').className = "effets";}, 1);
       
    }else{
        document.getElementById( id ).style.display = "none";
        flou(idFlou,HTMLFrameSetElement);
        document.getElementById( 'carreConnexion' ).classList.remove("effets");
        document.getElementById( 'carreInscription' ).classList.remove("effets");
    }
}


//Fonction flou (.style.filter= "blur(2px)" ne marche pas )
function flou(idFlou, action){
    if(action==true)
    {
        document.getElementById( idFlou ).className = "flou";
        document.getElementById( 'fp-nav' ).style.display = "none";
    }else
    {
        document.getElementById( idFlou ).classList.remove("flou");
        document.getElementById( 'fp-nav' ).style.display = "initial";
    }
}

//Connecter ou Non-connecter? Bouton qui disparait
var adresse = window.location.href
if (adresse.indexOf("connexion")>=0)
{
    document.getElementById( 'connecter' ).style.visibility = "hidden";
    document
}


function hide() {
    $('#cnil').hide()
}  
document.querySelector('#hideCookieMsg').addEventListener('click', () => hide() );


function hideV() {
    $('#videop').hide();
}  


document.querySelector('#hideVideo').addEventListener('click', () => hideV() );

/************************Affichage Animation ************************/
//Supprimer l'animation sur la navbar au chargement de la page
//Utilise Timer car Onload charge la transition trop vite
window.setTimeout(function(){document.getElementById('menu').className = "bugChargement";}, 1000);

