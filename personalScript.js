function changeButtons(num)
{
    for(let x = 1; x<=4; x++)
    {
        let current = "btn"+x;
        if(document.getElementById(current).classList.contains('btn-primary'))
        {
            document.getElementById(current).classList.remove('btn-primary');
        }
        if(current !== num)
        {
            if(!document.getElementById(current).classList.contains('btn-outline-dark'))
            {
                document.getElementById(current).classList.add('btn-outline-dark');
            }
        }
    }
    let temp = "btn"+num;
    document.getElementById(temp).classList.remove('btn-outline-dark');
    document.getElementById(temp).classList.add('btn-primary');
}

function changeDisplay(num)
{
    for(let x = 1; x<=4; x++)
    {
        let current = "disp"+x;
        let display = document.getElementById(current);
        if(x===num)
        {
            display.style.display = "block";
        }
        else
        {
            display.style.display = "none";
        }
    }
}

//Something was clicked
function btnClick(num)
{
    changeButtons(num);
    changeDisplay(num);
}