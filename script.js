function operate(operator, x, y)
{
    return operator(x, y);
}

function add (x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

function toDisplay()
{ 
    const display = document.querySelector('.current')
    if (this.textContent == "Clear")
    {
        display.textContent = 0;
    }
    else if (this.textContent == "Delete")
    {
        
        display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
    else
    {
        if (display.textContent == 0)
        {
            display.textContent = this.textContent
        }
        else
        {
            display.textContent += this.textContent
        }
    }

    //console.log(this.textContent)
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', toDisplay))

