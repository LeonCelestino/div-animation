/* consts */

const buttons = document.querySelectorAll(".btn");
const movingToLeft = document.querySelector(".left-arrow");
const movingToRight = document.querySelector(".right-arrow");
const movingToTop = document.querySelector(".up-arrow");
const movingToBottom = document.querySelector(".down-arrow");
const box = document.querySelector(".box");
/* pixel */
let pxRight = 0;
let pxTop = 0;
/* interval */
let interval;
/* functions */
movingToRight.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxRight+= 1;
        box.style.left = pxRight+ "px";
        
        if (pxRight > 250)
        {
            pxRight = 0;
        } 
    }, 10);
})

movingToLeft.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxRight-= 1;
        box.style.left = pxRight+ "px";
        
        if (pxRight < 0)
        {
            pxRight = 250;
        }
    }, 10);
})

movingToBottom.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxTop+= 1;
        box.style.top = pxTop+ "px";
        
        if (pxTop > 250)
        {
            pxTop = 0;
        }
    }, 10);
})

movingToTop.addEventListener("mousedown", ()=>{
    interval = setInterval(()=> {
        pxTop-= 1;
        box.style.top = pxTop+ "px";
        
        if (pxTop < 0)
        {
            pxTop = 250;
        }
    }, 10);
})


buttons.forEach(() => {
    addEventListener("mouseup", ()=> {
        clearInterval(interval);
    })
    
});

