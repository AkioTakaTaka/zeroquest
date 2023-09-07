//console.log(a.toString().length)

// for (let i = 0; i < a.toString().length; i++){
// z += '0'
// }
// console.log(z + a) РАБОТАЕТ!!!!
    
    const inputOne = document.getElementById('input1')
    const inputTwo = document.getElementById('input2')
    const outputBtn = document.getElementById('output')
    const resultArea = document.getElementById('result')

outputBtn.onclick = function sum(){

    while (inputOne.value.length < inputTwo.value) {

        inputOne.value = '0' + inputOne.value

    } 
        resultArea.textContent = inputOne.value
        inputOne.value = ''
        inputTwo.value = ''
}