
var str=[];
  
function add()
{
  var w
  w=document.getElementById("input").value
  str.push(w)
}

function dis()
{ 
   document.getElementById("d").innerHTML=str;

}

function ran()
{
  document.getElementById("r").innerHTML=str[Math.floor(Math.random() * str.length)]
}