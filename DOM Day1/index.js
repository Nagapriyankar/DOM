console.log('it works!');
let header = document.createElement('h1');
header.textContent = 'DYNAMIC HEADING';


//create para html element

let para = document.createElement('p');

//set the content of the para element

para.textContent = 'dynamical created para';

//append the para to html body
//document.body.appendChild(para);

//append header and p element to body

document.getElementById('firstDiv').append(header, para);


//create a div dynamically

let secondDiv = document.createElement('div');
secondDiv.append("text append")
document.body.appendChild(secondDiv)

//create attribute

let link = document.createElement('a')

//set attribute

link.href = 'https://google.com'
link.textContent = 'visit google.com'

document.getElementById('firstDiv').appendChild(link);

//create img element

let googlelogo = document.createElement('img')

googlelogo.src = "https://www.google.com/chrome/static/images/chrome-logo.svg"


document.getElementById('firstDiv').appendChild(googlelogo);


let image = document.createElement('img')
image.setAttribute('src', './image.jpg')
image.setAttribute('alt', 'Random Image')

image.style.width = '200px';

document.getElementById('firstDiv').appendChild(image);



