setTimeout(()=>{

    const span = document.querySelectorAll('div[role=row] [role=button] span')[1];
    const num = span.textContent.split(',').length

    const icon = document.querySelector('div.pseudoSelection[data-content-editable-void=true] [role=button].notranslate ')
    console.log(icon);
    icon.click();
    if(num === 1){
        console.log('❤️');
    }else if(num === 2){
        console.log('🧡');
    }else if(num === 3){
        console.log('💛');
    }else if(num === 4){
        console.log('💚');
    }else if(num === 5){
        console.log('💙');
    }else if(num === 6){
        console.log('💜');
    }else if(num === 7){
        console.log('🤎');
    }else if(num === 8){
        console.log('🖤');
    }
    
},1000);
