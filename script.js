/* consts */

const buttons = document.querySelectorAll(".btn");
const movingToLeft = document.querySelector(".left-arrow");
const movingToRight = document.querySelector(".right-arrow");
const movingToTop = document.querySelector(".up-arrow");
const movingToBottom = document.querySelector(".down-arrow");
const box = document.querySelector(".box");
/* pixel */
let pxX = 0;
let pxY = 0;
/* interval */
let interval;
/* functions */
movingToRight.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxX+= 1;
        box.style.left = pxX+ "px";
        
        if (pxX > 250)
        {
            pxX = 0;
        } 
    }, 10);
})

movingToLeft.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxX-= 1;
        box.style.left = pxX+ "px";
        
        if (pxX < 0)
        {
            pxX = 250;
        }
    }, 10);
})

movingToBottom.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxY+= 1;
        box.style.top = pxY+ "px";
        
        if (pxY > 250)
        {
            pxY = 0;
        }
    }, 10);
})

movingToTop.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxY-= 1;
        box.style.top = pxY+ "px";
        
        if (pxY < 0)
        {
            pxY = 250;
        }
    }, 10);
})


buttons.forEach(() => {
    addEventListener("mouseup", ()=> {
        clearInterval(interval);
    })
    
});

