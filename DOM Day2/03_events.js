
let button = document.getElementById('btn')
console.log('test')

button.addEventListener('click', function () { 
    console.log('button clickeed!')
})

let divElement = document.getElementById('divEle')


divElement.addEventListener('mouseleave', function () {
    divElement.style.backgroundColor = 'white'
})

divElement.addEventListener('mousemove', function () {
    divElement.style.backgroundColor = 'red'
})

