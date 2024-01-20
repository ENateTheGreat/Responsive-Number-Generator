function isPrime(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
        return false;
    }
    return true
    }
function isEven(num) {
    if (num % 2 === 0)
    return true
}
function isOdd(num) {
    if (num % 2 !== 0)
    return true
}

button.addEventListener("click", () => {
let number
const button = document.querySelector(`button`)
const input = document.querySelector(`input`).value
document.getElementById(`container`).innerHTML = ``
for (let i = 0; i<= input; i++) {
    number = document.createElement(`div`)
    number.style.color = `white`
    number.textContent = i
    number.fontSize = `24px`
    number.setAttribute(`id`, `item`)
    if (isPrime(i) == true){
         number.style.backgroundColor = `#fd5e5e`
         
    }else if (isOdd(i) == true){
         number.style.backgroundColor = `#fddb3a`
        
    }else if (isEven(i) == true){
         number.style.backgroundColor = `#21bf73`
    }
    document.getElementById("container").appendChild(number)
}
})