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
//Mostrar buscador 
function onbuscador(){
    document.getElementById("input-search").style.top ="0px";
    document.getElementById("container-input-search").style.top ="0px";
    document.getElementById("cabezera").style.height ="55px";
}
//Ocultar buscador
function offbuscador(){
    document.getElementById("input-search").style.top ="-150px";
    document.getElementById("container-input-search").style.top ="-160px";
    document.getElementById("cabezera").style.height ="0px";
}
//Funcion mostrar mas en la subcategoria de productos
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

//Buscar

function buscar(){
    // Obtener el valor del input
    var inputValue = document.getElementById("input-search").value;
    // Obtener todos los elementos li de la página
    var lis = document.getElementsByTagName("li");
    // Crear una variable para almacenar los elementos li que tienen el mismo valor que el input
    var matchingLis = [];

    // Recorrer todos los elementos li
    for (var i = 0; i < lis.length; i++) {
    // Si el valor del input es igual al valor del elemento li, añadir el elemento li a la variable matchingLis
    if (inputValue == lis[i].innerHTML) {
    matchingLis.push(lis[i]);
    }
    } 
    // Mostrar los elementos li que tienen el mismo valor que el input
    for (var i = 0; i < matchingLis.length; i++) {
    matchingLis[i].style.backgroundColor ="red";
    }

    // Quitar el background color cuando no es el mismo   

    var input = document.getElementById("input-search");
    var li_results = document.getElementById("search-results").getElementsByTagName("li");
    if (input.value === "") {
        //Condicion de que cuando no hay nada en el input 
      for (var i = 0; i < li_results.length; i++) {
        //Se ponga un background color blanco
        li_results[i].style.backgroundColor = "white";
      }
    } else {
        //Condicion de que si en el input hay un valor ejecute
        for (var i = 0; i < li_results.length; i++) {
        if (li_results[i].innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
            //Un subrayado rojo
            li_results[i].style.backgroundColor = "red";
            
        } else {
            //Si ninguna de las dos es el caso 
            //Se ponga un background color blanco
            li_results[i].style.backgroundColor = "white";
        }
        }
        // Seleccionar todos los artículos
        var articles = document.getElementsByTagName("article");

        // Cambiar la propiedad display de cada artículo

        if(document.getElementById("input-search").value === ""){
            for(var i = 0; i < articles.length; i++){
                articles[i].style.display = "none";
            }
        } else{
            for (var i = 0; i < articles.length; i++) {
                articles[i].style.display = "block"; 
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

