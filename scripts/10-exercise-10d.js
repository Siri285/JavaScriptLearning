function toggleButton(selector){
    const button = document.querySelector(selector);
   if( button.classList.contains('is-toggled')){
    button.classList.remove('is-toggled');
     }else{
        turnOffPreviousButton();
        button.classList.add('is-toggled');
        
    }
}

function turnOffPreviousButton(){
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton){
        previousButton.classList.remove('is-toggled');
    }
}

