// -----------------attemp 1------------------------
// const mytext = document.getElementById('mytext');
//     const btnCopy = document.getElementById('btncopy');

//     btnCopy.onclick = function() {
//         // select all text 
//         mytext.select();

//         // copy to clipboard
//         document.execCommand('Copy');
//     };

// -----------------attemp 2------------------------
function copytext(htmlElement)
{
    if(!htmlElement)
    {
        return;
    }

    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');

    inputElement.setAttribute('value',elementText);
    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#btnCopy').onclick = function()
{
    copytext(document.querySelector('#header'));
}