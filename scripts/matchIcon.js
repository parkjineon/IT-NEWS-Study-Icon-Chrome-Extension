async function onGetIcon(){
    const icon = await document.querySelector('div.pseudoSelection[data-content-editable-void=true] [role=button].notranslate ')
    return icon;
}


async function onGetFilter(){
    const filter = await document.querySelector('div.notion-focusable-within input');
    return filter;
}

async function onGetSpan(){
    const span = await document.querySelectorAll('div[role=row] [role=button] span')[1];
    return span;
}

setTimeout(()=>{

    
    const span = onGetSpan()
    const num = span.then((s)=>{
        const n = s.textContent.split(',').length
        return n;
    })

    const icon = onGetIcon().then((data)=>{
        data.click();
        return data;
    })

    const filter = onGetFilter().then((data)=>{
        console.log(data);
    })
    



    
    // if(num === 1){
    //     console.log('❤️');
    // }else if(num === 2){
    //     console.log('🧡');
    // }else if(num === 3){
    //     console.log('💛');
    // }else if(num === 4){
    //     console.log('💚');
    // }else if(num === 5){
    //     console.log('💙');
    // }else if(num === 6){
    //     console.log('💜');
    // }else if(num === 7){
    //     console.log('🤎');
    // }else if(num === 8){
    //     console.log('🖤');
    // }

},3000);
