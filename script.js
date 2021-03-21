const numArr = [7,8,9,4,5,6,1,2,3,0, "+", "-", "/", "*", "=", "%", "C", "Back", "Sqrt", "X2", "M+"];

const screen = document.getElementById("screen");
const firstPart = document.createElement("div");
firstPart.style.cssFloat = "left";
const operand = document.createElement("div");
operand.style.cssFloat = "left";
const secondPart = document.createElement("div");
secondPart.style.cssFloat = "left";
const equal = document.createElement("div")

screen.appendChild(firstPart);
screen.appendChild(operand);
screen.appendChild(secondPart);
screen.appendChild(equal)

let result = 0;
let sumM = [];

function deleteAll(){
    firstPart.innerText = "";
    operand.innerText = "";
    secondPart.innerText = "";
    screen.innerText = ""
}



for(let i = 0; i < numArr.length; i++){
    
    const btn = document.createElement("button");
    btn.innerText = numArr[i];
    btn.value = numArr[i]
    btn.setAttribute("id", numArr[i]);
    //console.log(btn)

    const btnContainer = document.getElementById("main");
    btnContainer.appendChild(btn)

    btn.addEventListener("click", function(){
        
        if(firstPart.innerText == "" && !isNaN(btn.value) && operand.innerText == ""){
            firstPart.innerText = +btn.value
        }else if(firstPart.innerText != ""  && !isNaN(btn.value) && operand.innerText == ""){
            firstPart.innerText += btn.value
        }

        if(btn.innerText == "+" || btn.innerText == "-" || btn.innerText == "/" || btn.innerText == "*" || btn.innerText == "%"){
            operand.innerText = btn.innerText
            //console.log(operand.innerText)
        }
        
        if(operand.innerText != "" && btn.value !=  "=" && !isNaN(btn.value)){
            secondPart.innerText += btn.value
        }


        if(btn.innerText == "Back"){

            let totalStr = firstPart.innerText.concat(operand.innerText).concat(secondPart.innerText)
            
            for( let i=0; i<totalStr.length; i++){
                if(secondPart.innerText != ""){
                    secondPart.innerText = secondPart.innerText.slice(0, secondPart.innerText.length - 1)
                    break
                }
                if(operand.innerText != ""){
                    operand.innerText = ""
                    break
                }
                if(firstPart.innerText != ""){
                    firstPart.innerText = firstPart.innerText.slice(0, firstPart.innerText.length - 1)
                    break
                }
            }
            
        }

            
        if(btn.innerText == "C"){
            deleteAll()
        }

        if(firstPart.innerText != "" && btn.innerText == "Sqrt"){
            firstPart.innerText = Math.sqrt(parseInt(firstPart.innerText))
        }

        if(firstPart.innerText != "" && btn.innerText == "X2"){
            firstPart.innerText = parseInt(firstPart.innerText) *parseInt(firstPart.innerText)
        }


        function equal() {
            if(operand.innerText == "+"){
                result = parseInt(firstPart.innerText) + parseInt(secondPart.innerText)
                firstPart.innerText = "";
                operand.innerText = "";
                secondPart.innerText = "";
                screen.innerText = result
            }else if(operand.innerText == "-"){
                result = parseInt(firstPart.innerText) - parseInt(secondPart.innerText)
                firstPart.innerText = "";
                operand.innerText = "";
                secondPart.innerText = "";
                screen.innerText = result
            }else if(operand.innerText == "*"){
                result = parseInt(firstPart.innerText) * parseInt(secondPart.innerText)
                firstPart.innerText = "";
                operand.innerText = "";
                secondPart.innerText = "";
                screen.innerText = result
            }else if(operand.innerText == "/"){
                result = parseInt(firstPart.innerText) / parseInt(secondPart.innerText)
                firstPart.innerText = "";
                operand.innerText = "";
                secondPart.innerText = "";
                screen.innerText = result
            }else if(operand.innerText == "%"){
                result = parseInt(firstPart.innerText) * parseInt(secondPart.innerText) / 100
                firstPart.innerText = "";
                operand.innerText = "";
                secondPart.innerText = "";
                screen.innerText = result
            }

        }

        if(btn.value == "="){
            equal()
        }


        if(btn.innerText == "M+"){
            equal()
            
            if(result){
                sumM.push(result);
                result = 0;
                console.log(sumM)
            }else{
                sumM.push(parseInt(firstPart.innerText));
                firstPart.innerText = ""
                console.log(sumM)
            }
            deleteAll()
        }
    })

}