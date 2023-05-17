let box=document.querySelector(".list-group");

console.log(box.firstChild);
console.log(box.firstElementChild);


console.log(box.lastChild);

console.log(box.lastElementChild);

console.log(box.parentElement);


console.log(box.nextSibling);
console.log(box.nextElementSibling);

console.log(box.previousSibling);
console.log(box.previousElementSibling);


let newDiv=document.createElement('div');
newDiv.className="new-class";

newDiv.setAttribute('id','mydiv');

let txt=document.createTextNode("Hello world");

newDiv.appendChild(txt);

let a=document.querySelector(".container");
let b=document.querySelector("#header-title");

a.insertBefore(newDiv,b);


let c=document.querySelector("#items");
let d=document.querySelector(".list-group-item");
c.insertBefore(newDiv,d);



