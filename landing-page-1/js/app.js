
//FUNTIONALITY OF BUTTON TOGGLE====================
$(".toggle").on("click",()=>{
    $(".menu-brand ul").slideToggle(200);
})
//===========================================


//FUNCTIONALITY OF MENU'S ITEM====================

function rotateImg(element=false){
    //FUNCION QUE GIRA LAS FLECHAS DE LOS ITEM
    let images;
    if(element!=false){
        images = element.children();
        images.each((index,img)=>{
            img.classList.toggle("rotated");
        })
    }else{
        images = $(".item-sub-menu").children()
        images.each((index,img)=>{
            img.classList.remove("rotated");
        })
    }
    
}

$(".item-sub-menu").click(function () {

    let element = $(this).next()
    element.slideToggle(300)
    rotateImg($(this));

})

$(".item-sub-menu").on("mouseenter",function() {
    if($(window).width()>700){
        let unfolded = $(this).parent().children()[1].style.display === "block";

        if(!unfolded){
        //CIERRO TODOS LOS DESPLEGABLES
        $(".option-hidden").each(function () {
            $(this).hide()
            
        })
        rotateImg();

        //ABRO SOLO EL DESPLEGABLE ELEGIDO
        $(this).next().slideDown()
        //$(".item-main img").toggleClass("rotated")
        rotateImg($(this));
        }
        
    }
})

//-------------solution of bug of menu------------------
/*this snippet save the error of the 
menu in the resize of the viewport*/
$(window).resize(()=>{
    
    if($(this).width()>700){
        $(".menu-brand ul").css("display","flex");
        
    } else{
        $(".menu-brand ul").css("display","none");
    }
})

//================================================

