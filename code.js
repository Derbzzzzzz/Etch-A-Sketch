//Declares variables
let container = document.querySelector(".container");
let eraser = document.querySelector(".eraser");
let sizer = document.querySelector(".sizer");
let clear = document.querySelector(".clear");
let color = 'black'
let size = 16;

//adds eraser event and sets color of mouse

eraser.addEventListener('click', function(){
    if (eraser.textContent == "Eraser: Off"){
        eraser.textContent = "Eraser: On";
        color = 'white';
    } else{
        eraser.textContent = "Eraser: Off";
        color = 'black';
    }
    setColor()
})

//Creates new board

function creator(size){
    
    for(let i = 1; i < size*size + 1; i++) {
        let div = document.createElement("div");
        div.style.height = `${640/size}px`;
        div.style.width = `${640/size}px`;
        div.classList.add("box");
        container.appendChild(div);
     }
}

//Sets Color of Mouse (meaning changes addEventListener of boxes)

function setColor(box){
    box.addEventListener('mouseover', function(e){
        if(e.buttons == 1 || e.buttons == 3){
        box.style.backgroundColor = `${color}`; 
        }})
    box.addEventListener('click', function(){
        box.style.backgroundColor = `${color}`; 
})}

//Sets Up new clean board

function setup(){
   let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
        setColor(box);
        
})};


//Initial setup upon loading page
creator(size);
setup();


//Add event listener to sizer button (prompts to change size of board)
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

//Clears the board to white
clear.addEventListener('click', function(){
    setup();
});
