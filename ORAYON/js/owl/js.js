function botao(){
    window.open("https://www.youtube.com/watch?v=znds8S2kKg4");
}

function botao2(){
    window.open("https://www.adorocinema.com/series/serie-22708/");
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        460:{
            itens:3
        },
        600:{
            items:5
        },
        1000:{
            items:9
        }
    }
})