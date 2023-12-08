

function calculate()
{    console.log("calculate called")
    let x = parseInt(document.getElementById("n1")["value"])
    let y = parseInt(document.getElementById("n2").value)
    let op = document.getElementById("operation").value

    let result 
    switch(op)
    {
        case '+' : result = x + y; break; 
        case '-' : result = x - y; break;
        case '*' : result = x * y; break;
        case '/' : result = x / y; break;
    }
    //let outputstr = x+" "+op+" "+y+"="+result
    let outputstr = `<i> ${x} ${op} ${y} = ${result} </i>`
    document.getElementById("sp1").innerHTML = outputstr
    //document.getElementById("sp1").innerText = outputstr

}


function onCalculateButtonClick() {
    calculate();
  }