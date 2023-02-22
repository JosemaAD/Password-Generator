const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generatePassword = document.getElementById('generator-el')
let firstOption = document.getElementById('first-option-el')
let secondOption = document.getElementById('second-option-el')
let succesCopy = document.getElementById('succes-copy')
let togler = document.querySelector("#togler")
let theme = document.querySelector("#theme-link")

function randomCharacter(){
    let rand = Math.floor( Math.random() * characters.length )
    return characters[rand]
}

function newPassword(){
    let password = []
    let passwordAlt = []
    for( let i = 0; i < 16; i++){
        password.push(randomCharacter())
        passwordAlt.push(randomCharacter())
    }  

    printPassword(password, passwordAlt) 
}

function printPassword(passArr, passArrAlt){
    let result = ''
    let resultAlt = ''
    for( let i = 0 ; i < passArr.length; i++){
        result += passArr[i]
        resultAlt += passArrAlt[i]
    }

    firstOption.value = result
    secondOption.value = resultAlt
}

const copyToClipboard = async (a) => {    
    try{
        if(a.value === ''){
        }else{
            // Copy the text inside the text field
            await navigator.clipboard.writeText(a.value);
            succesCopy.textContent = 'Copied!'
        }
    } catch(error){
        console.error(error)
    }
}

//Dark mode
togler.addEventListener("click", function() {
  
  if (theme.getAttribute("href") == "style_light.css") {
        theme.href = "style_dark.css";
  } else if(theme.getAttribute("href") == "style_dark.css") {
        theme.href = "style_light.css";
  }
  
});