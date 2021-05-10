function botao(){
    window.open("https://www.youtube.com/watch?v=SvSkxBYuoQY");
}

function botao2(){
    window.open("https://www.themoviedb.org/tv/1425-house-of-cards?language=pt-BR");
}

$('.owl-carousel').owlCarousel({
    loop:true, /*continuar de forma infinita - boleano*/
    margin:10, /*margen do sfilmes entre si - inteiro*/
    nav:false, /*botoes de navegação - boleano*/
    responsive:{ /* se adapta a tela */
        0:{
            items:2
        },
        460:{
            itens:3
        },
        700:{
            items:5
        },
        1000:{
            items:9
        }
    }
})



