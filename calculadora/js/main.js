//FUNCTIONS=====================================================================
const writeNumber = (digits) =>{

    let digitsInScreen = $(".digits").text();

    if(digitsInScreen=="0"){
        
        if(digits!="0") $(".digits").text(digits);

    } else if(digits == "0" ){
        
        /*if(!digitsInScreen.match(/[-+/x] $/g)){
            $(".digits").text(digitsInScreen + digits)
        }*/
        $(".digits").text(digitsInScreen + digits)
    }
    else{
        
        if(digitsInScreen.length < 20){
            $(".digits").text(digitsInScreen + digits)
        }

    }
    
}

const writeDot = (digit) =>{
    let digitsInScreen = $(".digits").text();

 

    //VALIDATIONS FOR THE USE OF THE DOT
    if(!digitsInScreen.match(/[ ,+-/x$]/g) && !digitsInScreen.includes(" ")){
        $(".digits").text(digitsInScreen + digit);
        

    } else if(digitsInScreen.includes(" ") && digitsInScreen.match(/[0-9]$/g)){

        if(digitsInScreen.match(/,/g) == null){
            $(".digits").text(digitsInScreen + digit);
            
            
        } else if((digitsInScreen.match(/,/g).length < 2) && (digitsInScreen.split(",")[1].includes(" "))) {
            $(".digits").text(digitsInScreen + digit);
            
        }
    } 

    
}

const writeOperation = (digit) =>{
    let digitsInScreen = $(".digits").text();
    re = /[-*+/]/g;

    

    if(digitsInScreen!=="0" && !digitsInScreen.match(re) && digitsInScreen[digitsInScreen.length-1] !== ","){
        
        $(".digits").text(digitsInScreen + ' ' + digit + " ");

    }
}

const delOperation = ()=>{
    let textDisplay = $(".digits").text();
    let lenghtText = textDisplay.length;
    let lastChar = textDisplay[lenghtText-1];

    if(lastChar===" ") $(".digits").text(textDisplay.slice(0,lenghtText-3))
    else if(lenghtText > 1) $(".digits").text(textDisplay.slice(0,lenghtText-1))
    else $(".digits").text("0");
}

const resolveOperation = () =>{

    let display = $(".digits");
    let textDisplay = display.text();
    let stringResult = "";
    
    for(let char of textDisplay){
        //console.log(char)
        switch(char){
            case ",":
                stringResult+=".";
                break;

            case "x":
                stringResult+="*";
                break;

            default:
                stringResult+=char;
                break;
        }
    }
    //console.log(stringResult)

    if(stringResult.match(/\/ 0$/g)){ 
        alert("Error: No se puede dividir por cero");
        return;
    }    
    display.text(eval(stringResult));
    
}

const fixScrollDisplay = ()=>{
    let textDisplay = $(".digits");
    textDisplay[0].scrollLeft = textDisplay.width();
    
}

//HANDLE CLICKS==============================================================
$(".key-number").on("click",function(){
    writeNumber($(this).text());
    fixScrollDisplay();
    
})

$("#key-dot").on("click",function(){
    writeDot(",");
    fixScrollDisplay();
})

$("#key-reset").on("click",function(){
    $(".digits").text("0");
})

$("#key-del").on("click",function(){
    delOperation();
})

$(".key-operation").on("click",function(){
    writeOperation($(this).text());
    fixScrollDisplay();
})

$("#key-equal").on("click",function(){
    resolveOperation();
    fixScrollDisplay();
})


