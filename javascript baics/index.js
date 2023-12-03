let c=document.getElementById("count-el");

console.log(c);
let count=0;
function increment()
{
    count+=1;
    c.innerText=count;

}

function Save(){
    document.getElementById("save-el").textContent+=count+" - "
    
    console.log(count);
    
}
function Reset(){
    count=0;
    document.getElementById("count-el").innerText=count;
    
}