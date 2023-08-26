let header = document.createElement('h1');
header.textContent = 'Welcome to our Website';


let para = document.createElement('p');
para.textContent = 'Hello, DOM!';
document.getElementById('output').append(header, para);


let image = document.createElement('img')
image.setAttribute('src', './image.jpg')
image.setAttribute('alt', 'Random Image')
image.style.width = '100px';

document.getElementById('imageContainer').appendChild(image);

let para1 = document.createElement('p');
para1.textContent = 'This para is inside div with id OUTPUT inside html ';
document.getElementById('output').append(para1);


let anchor = document.createElement('a')

anchor.href = 'https://www.google.com'
anchor.textContent = 'visit google'
anchor.target = '_blank'
document.getElementById('para1').append(anchor);




let listheader = document.createElement('h1');
listheader.textContent = 'List';
document.getElementById('listContainer').append(listheader);



let list = document.createElement('ul')

let listItem = document.createElement('li')
listItem.textContent = 'apple'
list.appendChild(listItem)

listItem = document.createElement('li')
listItem.textContent = 'orange'
list.appendChild(listItem)

listItem = document.createElement('li')
listItem.textContent = 'pomo'
list.appendChild(listItem)

document.getElementById('listContainer').appendChild(list);


/* creating dynamic list */

let listItems = ['apple', 'orange', 'pomo', 'amla', 'melon', 'banana']

let list2 = document.createElement('ol')

listItems.forEach(val => {
    listItem = document.createElement('li')
    listItem.textContent = val
    list2.appendChild(listItem)
})

document.getElementById('listContainer').append(list2)


/* get element by class example  */

let higlightedEle = document.getElementsByClassName('highlighter')

for (i = 0; i < higlightedEle.length; i++) {
    higlightedEle[i].style.backgroundColor = 'red'      
}


/*/* get element by tag name example  */

let tagName = document.getElementsByTagName('h1')
for (i = 0; i < tagName.length; i++) { 
    tagName[i].style.backgroundColor = 'orange'
    tagName[i].style.color = 'white'

}


/* queryselector using class name   */

let qs = document.querySelector('.highlighter')

qs.style.backgroundColor = 'aqua'

let qsa = document.querySelectorAll('.highlighter')
/* for (ind in qsa) { 
    qsa[ind].style.color = 'white'
}
 */

/* queryselector using id   */

let listqs = document.querySelector('#listContainer')

console.log(list)

listqs.style.color='red'













