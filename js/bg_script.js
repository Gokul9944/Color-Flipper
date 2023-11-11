const color=document.getElementById("colorx");
const  wrap=document.getElementById("wrap");
const btn1=document.getElementById("btn");
let btn2=document.getElementById("btn2");
let input=document.getElementById("inpout");
//hex-color
const  hex_color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn1.addEventListener('click',colorg)
function colorg()
{
    let g='#'
    for(let i=0;i<6;i++)
    {
        g=g+randomColor()
    }
    wrap.style.backgroundColor=g;
    color.innerHTML=g;
}

function randomColor()
{
   let goku=Math.floor(Math.random()*16)
   return hex_color[goku];
}



