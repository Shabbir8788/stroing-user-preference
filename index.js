const selectFontSize = document.getElementById('selectFontSize');
const selectBgColor = document.getElementById('selectBgColor');
const resetButton = document.getElementById('resetButton');
const mainElement = document.querySelector('main');


const changeFontSize = (event) =>{
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize; 
    localStorage.setItem('fontSize', selectedFontSize);
}

const changeBgColor = (event) =>{
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem('bgColor', selectedBgColor);
}

const clearLocalStorage = () =>{
    localStorage.removeItem('fontSize');
    localStorage.removeItem('bgColor');
    setValues('16px', 'aqua');
}

selectFontSize.addEventListener('change', changeFontSize);
selectBgColor.addEventListener('change', changeBgColor);
resetButton.addEventListener('click', clearLocalStorage);

const setValues = (fontSize, bgColor) =>{
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}

const initialSetup = () =>{
    const fontSize = localStorage.getItem('fontSize');
    const bgColor = localStorage.getItem('bgColor');

    if(fontSize && bgColor){
        setValues(fontSize, bgColor);
    }
    if(!fontSize && !bgColor){
        setValues('16px', 'aqua');
    }
    if(!fontSize && bgColor){
        setValues('16px', bgColor);
    }
    if(fontSize && !bgColor){
        setValues(fontSize, 'aqua');
    }
}

initialSetup();
