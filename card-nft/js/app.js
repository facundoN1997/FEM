$("document").ready(()=>{
    $("#main-img").hover(()=>{
        $("#main-img").addClass("half-visible");
        $("#view-img").addClass("visible")

    },
    ()=>{
        $("#main-img").removeClass("half-visible");
        $("#view-img").removeClass("visible")
    })
})