$(".item-question").click((e)=>{
    

    //ENMENDO POSIBLES ERRORES EN EL CLICKEO DEL ELEMENTO
    const element1 = e.target;
    const element2 = e.target.parentElement;
    
    
    if(element1.className == "item-question"){
        var item = element1;
        
    } else if(element2.className == "item-question"){
        var item = element2;
          
    }

    //SELECCIONO ELEMENTO COLLAPSABLE

    const parrafo = item.children[2];
    const titulo = item.children[0];
    const flecha = item.children[1]

    $(".parraph-question").addClass("hidden");
    $(".arrow").removeClass("rotate");
    $(".title-question").removeClass("tittle-active");
    parrafo.classList.remove("hidden");
    titulo.classList.add("tittle-active");
    flecha.classList.add("rotate")



    
})





