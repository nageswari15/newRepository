function addBox(){
    const list=document.querySelector("body");
    const newDiv=document.createElement('div');
    list.appendChild(newDiv);
    
}

function removeBox(){
    const list=document.querySelector("body");
    const newDiv=document.querySelector('div');
    list.removeChild(newDiv);
    
}