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
    
    let inputOneValue = inputOne.value

    while (inputOneValue.length < inputTwo.value) {

        inputOneValue = '0' + inputOneValue

    } 
        resultArea.value = inputOneValue
}