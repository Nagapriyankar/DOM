/* set interval examples */

function sayHello() {
    console.log("Hello Team!")
}

window.setTimeout(sayHello(), 5000)

let sayHai = (() => {
    console.log("Hai Team!")
})
window.setTimeout(sayHai, 3000)

/*
window.setTimeout(() => { 
    console.log("Hai Everyone")
    document.writeln("Hai Everyone")
}, 3000)


 setTimeout(() => {
    document.body.style.backgroundColor = 'pink'
 }, 3000)
 */

 /* enable disabled button */

let downloadBtn = document.getElementById('download')
 
setTimeout(() => {
    downloadBtn.removeAttribute('disabled')
}, 5000);



/* create a button in the run time */

setTimeout(() => { 
    let savebtn = document.createElement('button')
    savebtn.textContent = 'Save'
    document.getElementById('savebtn').appendChild(savebtn)
}, 5000)



/* set timeout */

/* let count = 10
setInterval(() => {
    console.log(count)
    count--
},1000) */

//set interval wth clear interval
let count = 10

let updateCount = (() => {
    if(count>0)
        console.log(count--)
    else
        clearInterval(countInterval)
 })

let countInterval = setInterval(updateCount, 1000)

//using setTimeout and setInterval

let para = document.getElementById('para')
let btn = document.getElementById('dld')

let c = 3

let decCount = (() => {
    if (c >= 0)
        para.textContent = `Your download button will appear in ${c--} sec`
    else {
        clearInterval(countdownBtn)
        btn.removeAttribute('disabled')
    }
})

let countdownBtn = setInterval(decCount, 1000)







