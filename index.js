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

}

/////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////////
//Funcion mostrar buscador
let contador = 0;

function click_icono(){
    contador++;
    if (contador === 1) {
        onbuscador();
    } else if (contador === 2) {
        offbuscador();
        contador = 0;
    } 
}


//Mostrar buscador 
function onbuscador(){
    //Display block en el buscador
    document.getElementById("input-search").style.display="block";
    document.getElementById("container-input-search").style.display="block";
    //Estilos de subir y bajar cosas
    document.getElementById("input-search").focus();
    document.getElementById("search-results").style.marginTop = "50px"
} 
//Ocultar buscador

function offbuscador(){
    //Display none en el buscador
    document.getElementById("input-search").style.display="none";
    document.getElementById("container-input-search").style.display="none";
    //Estilos de subir y bajar cosas
    document.getElementById("search-results").style.marginTop = "10px"
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




//Mostrar anuncio
const button = document.getElementById('saltar-anuncio1');
function mostrar_anuncio(){
    document.getElementById("anuncio1").style.display = "block";
    
   
}
function saltar_anuncio1(){
    document.getElementById("anuncio1").style.display = "none";
    
}

function mostrar_nav(){
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.position = "fixed";
}