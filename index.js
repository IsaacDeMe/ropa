//Canviar el selecionado
//Todo
function todo(){
    document.getElementById("todo").className = "si-selecionado";
    document.getElementById("sudaderas").className = "no-selecionado";
    document.getElementById("camisetas").className = "no-selecionado";
    document.getElementById("pantalones-largos").className = "no-selecionado";
    document.getElementById("pantalones-cortos").className = "no-selecionado";
    document.getElementById("calcetines").className = "no-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "block";
    document.getElementById("camisetas-categoria").style.display = "block";
    document.getElementById("pantalones-largos-categoria").style.display = "block";
    document.getElementById("pantalones-cortos-categoria").style.display = "block";
    document.getElementById("calcetines-categoria").style.display = "block";
    //QUITAR NAV
    ocultar_nav();
    
}
//Sudaderas
function sudaderas(){
    document.getElementById("todo").className = "no-selecionado";
    document.getElementById("sudaderas").className = "si-selecionado";
    document.getElementById("camisetas").className = "no-selecionado";
    document.getElementById("pantalones-largos").className = "no-selecionado";
    document.getElementById("pantalones-cortos").className = "no-selecionado";
    document.getElementById("calcetines").className = "no-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "block";
    document.getElementById("camisetas-categoria").style.display = "none";
    document.getElementById("pantalones-largos-categoria").style.display = "none";
    document.getElementById("pantalones-cortos-categoria").style.display = "none";
    document.getElementById("calcetines-categoria").style.display = "none";
    //QUITAR NAV
    ocultar_nav();
}
//Camisetas
function camisetas(){
    document.getElementById("todo").className = "no-selecionado";
    document.getElementById("sudaderas").className = "no-selecionado";
    document.getElementById("camisetas").className = "si-selecionado";
    document.getElementById("pantalones-largos").className = "no-selecionado";
    document.getElementById("pantalones-cortos").className = "no-selecionado";
    document.getElementById("calcetines").className = "no-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "none";
    document.getElementById("camisetas-categoria").style.display = "block";
    document.getElementById("pantalones-largos-categoria").style.display = "none";
    document.getElementById("pantalones-cortos-categoria").style.display = "none";
    document.getElementById("calcetines-categoria").style.display = "none";
    //QUITAR NAV
    ocultar_nav();
}

//Pantalones largos
function pantalones_largos(){
    document.getElementById("todo").className = "no-selecionado";
    document.getElementById("sudaderas").className = "no-selecionado";
    document.getElementById("camisetas").className = "no-selecionado";
    document.getElementById("pantalones-largos").className = "si-selecionado";
    document.getElementById("pantalones-cortos").className = "no-selecionado";
    document.getElementById("calcetines").className = "no-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "none";
    document.getElementById("camisetas-categoria").style.display = "none";
    document.getElementById("pantalones-largos-categoria").style.display = "block";
    document.getElementById("pantalones-cortos-categoria").style.display = "none";
    document.getElementById("calcetines-categoria").style.display = "none";
    //QUITAR NAV
    ocultar_nav();
}

//Pantalones cortos
function pantalones_cortos(){
    document.getElementById("todo").className = "no-selecionado";
    document.getElementById("sudaderas").className = "no-selecionado";
    document.getElementById("camisetas").className = "no-selecionado";
    document.getElementById("pantalones-largos").className = "no-selecionado";
    document.getElementById("pantalones-cortos").className = "si-selecionado";
    document.getElementById("calcetines").className = "no-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "none";
    document.getElementById("camisetas-categoria").style.display = "none";
    document.getElementById("pantalones-largos-categoria").style.display = "none";
    document.getElementById("pantalones-cortos-categoria").style.display = "block";
    document.getElementById("calcetines-categoria").style.display = "none";
    //QUITAR NAV
    ocultar_nav();
}
//Calcetines
function calcetines(){
    document.getElementById("todo").className = "no-selecionado";
    document.getElementById("sudaderas").className = "no-selecionado";
    document.getElementById("camisetas").className = "no-selecionado";
    document.getElementById("pantalones-largos").className = "no-selecionado";
    document.getElementById("pantalones-cortos").className = "no-selecionado";
    document.getElementById("calcetines").className = "si-selecionado";
    //No display a todas las subcategorias de las demas categorias
    document.getElementById("sudaderas-categoria").style.display = "none";
    document.getElementById("camisetas-categoria").style.display = "none";
    document.getElementById("pantalones-largos-categoria").style.display = "none";
    document.getElementById("pantalones-cortos-categoria").style.display = "none";
    document.getElementById("calcetines-categoria").style.display = "block";
    //QUITAR NAV
    ocultar_nav();
}

/////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////////
//Funcion mostrar buscador
let contador = 0;

function click_icono(){
    document.getElementById("nav").style.display = "none";
    contador++;
    if (contador === 1) {
        onbuscador();
    } else if (contador === 2) {
        onbuscador();
        contador = 0;
    } 
}


//Mostrar buscador 
function onbuscador(){
    if(document.getElementById("nav").style.left === "0%"){
        document.getElementById("nav").style.left = "-100%";
        document.getElementById("ctn").style.display = "none";
        //Display block en el buscador
        document.getElementById("container-input-search").style.top="10vh";
        //Estilos de subir y bajar cosas
        document.getElementById("input-search").focus();

        document.getElementById("ctn").style.display = "block";

    } else{
        document.getElementById("container-input-search").style.top="10vh";
        //Estilos de subir y bajar cosas
        document.getElementById("input-search").focus();
        document.getElementById("ctn").style.display = "block";
    }
} 
//Ocultar buscador

function offbuscador(){
    //Display none en el buscador
    document.getElementById("container-input-search").style.top="0vh";
    //Estilos de subir y bajar cosas
    document.getElementById("input-search").value = "";
}


//Buscar

function buscar(){
    var inputValue = document.getElementById("input-search").value;
    var lis = document.getElementsByTagName("li");
    var matchingLis = [];

    for (var i = 0; i < lis.length; i++) {
        if (inputValue == lis[i].innerHTML) {
            matchingLis.push(lis[i]);
        }
    } 

    for (var i = 0; i < matchingLis.length; i++) {
        var article = matchingLis[i].parentElement.parentElement;
        article.style.backgroundColor ="red";
    }

    // Quitar el background color cuando no es el mismo
    var input = document.getElementById("input-search");
    var li_results = document.getElementById("search-results").getElementsByTagName("li");
    if (input.value === "") {
        for (var i = 0; i < li_results.length; i++) {
            li_results[i].style.backgroundColor = "white";
        }
    } else {
        for (var i = 0; i < li_results.length; i++) {
            if (li_results[i].innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
                li_results[i].style.backgroundColor = "red";
                
            } else {
                li_results[i].style.backgroundColor = "white";
            }
        }

        var articles = document.getElementsByTagName("article");

        if(document.getElementById("input-search").value === ""){
            for(var i = 0; i < articles.length; i++){
                articles[i].style.backgroundColor = "white";
            }
        } else{
            for (var i = 0; i < articles.length; i++) {
                articles[i].style.backgroundColor = "red"; 
            }
        }
        
    }
}



function mostrar_nav(){
    if(document.getElementById("container-input-search").style.top="10vh"){
        document.getElementById("container-input-search").style.top = "0vh";
        //MOSTRAR NAV
        document.getElementById("ctn").style.display = "block";
        document.getElementById("nav").style.left = "0%";
        document.getElementById("nav").style.display = "block";

    } else{
        document.getElementById("nav").style.left = "0%";
        document.getElementById("ctn").style.display = "block";
    }

  
}

function ocultar_nav(){
    document.getElementById("nav").style.left = "-100%";
    document.getElementById("ctn").style.display = "none";

}







//Mostrar anuncio
const button = document.getElementById('saltar-anuncio1');
function mostrar_anuncio(){
    document.getElementById("anuncio1").style.display = "block";
    
   
}
function saltar_anuncio1(){
    document.getElementById("anuncio1").style.display = "none";
    
}