let container = document.querySelector(".container");
let size = 16;


function creator(size){
    
    for(let i = 1; i < size*size + 1; i++) {
        let div = document.createElement("div");
        div.style.height = `${640/size}px`;
        div.style.width = `${640/size}px`;
        div.classList.add("box");
        container.appendChild(div);
     }
}

function setup(){
   let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
        box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'black';
})})};

creator(size);
setup();

let sizer = document.querySelector(".sizer");

sizer.addEventListener('click', function(){
    let size = prompt("Enter number between 1 and 100", "16");
    if(isNaN(size) || size > 100 || size < 1){
        alert("Error: Must input number between 1 and 100");
    } else{
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
        creator(size);
        setup();
    }
    
});

let clear = document.querySelector(".clear");

clear.addEventListener('click', function(){
    setup();
});
