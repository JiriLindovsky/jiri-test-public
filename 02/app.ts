//let studentName={name:""};
document.addEventListener('DOMContentLoaded',contentLoaded);
function contentLoaded()
{ 
    document.getElementById('name')?.addEventListener("keyup",keyUp);
}

function keyUp(event)
{
    calculateNumericOutput();
}
function calculateNumericOutput()
{   let studentName=(<HTMLInputElement> document.getElementById('name')).value;
    let totalNameValue=0;   
    for (let index = 0; index < studentName.length; index++) {
        totalNameValue+=studentName.charCodeAt(index);
        
    }

    
(<HTMLDivElement> document.getElementById('output')).innerText="Total is:"+totalNameValue;
}