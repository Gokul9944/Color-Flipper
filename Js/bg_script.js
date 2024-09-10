
//getting tags from html

const color=document.getElementById("colorx");
const  wrap=document.getElementById("wrap");
const btn1=document.getElementById("btn");
let btn2=document.getElementById("btn2");
let input=document.getElementById("inpout");
let icon=document.getElementById("icon")


//This is the hexa colorcode(the color code contain six character that shows colors)
const  hex_color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


//adding events 
//this function form 6 character from "randomColor" functon and insert as a background color
btn1.addEventListener('click',colorg)
function colorg()
{
    let g='#'
    for(let i=0;i<6;i++)
    {
        g=g+randomColor()
    }
    wrap.style.backgroundColor=g;
    //this is show hexa code of the color
    color.innerHTML=g + ` <i class="fa-regular fa-clipboard  icon" onclick="copyText()" style="margin-left: 10px;"></i>` ;
}

//this function generate random element from "hexa color" variable
function randomColor()
{
   let goku=Math.floor(Math.random()*16)
   return hex_color[goku];
}

// this function copy the hexa-color code 
function copyText()
{
    navigator.clipboard.writeText(color.innerText);
}


