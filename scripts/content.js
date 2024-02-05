    setTimeout(()=>{
        console.log('지금')
        const a = document.querySelectorAll('.notion-selectable.notion-page-block.notion-collection-item');
        let red = 0;
        let orange = 0;
        let yellow = 0;
        let green = 0;
        let blue = 0;
        let purple = 0;
        let brown = 0;
        let black = 0;
        for(let i=0; i < a.length; i++){
            try{
                if('❤️'===(a[i].querySelector('img')).getAttribute("alt")){
                    red += 1;
                }else if('🧡'===(a[i].querySelector('img')).getAttribute("alt")){
                    orange += 1;
                }else if('💛'===(a[i].querySelector('img')).getAttribute("alt")){
                    yellow += 1;
                }else if('💚'===(a[i].querySelector('img')).getAttribute("alt")){
                    green += 1;
                }else if('💙'===(a[i].querySelector('img')).getAttribute("alt")){
                    blue += 1;
                }else if('💜'===(a[i].querySelector('img')).getAttribute("alt")){
                    purple += 1;
                }else if('🤎'===(a[i].querySelector('img')).getAttribute("alt")){
                    brown += 1;
                }else if('🖤'===(a[i].querySelector('img')).getAttribute("alt")){
                    black += 1;
                }

            }catch(e){
                continue;
            }
        }
        
        const board = document.createElement('div');
        board.className = "CEBoard"
        const pRed = document.createElement('p');
        pRed.textContent = `❤️ ${red}개`
        const pOrange = document.createElement('p');
        pOrange.textContent = `🧡 ${orange}개`
        const pYellow = document.createElement('p');
        pYellow.textContent = `💛 ${yellow}개`
        const pGreen = document.createElement('p');
        pGreen.textContent = `💚 ${green}개`
        const pBlue = document.createElement('p');
        pBlue.textContent = `💙 ${blue}개`
        const pPurple = document.createElement('p');
        pPurple.textContent = `💜 ${purple}개`
        const pBrown = document.createElement('p');
        pBrown.textContent = `🤎 ${brown}개`
        const pBlack = document.createElement('p');
        pBlack.textContent = `🖤 ${black}개`


        board.appendChild(pRed);
        board.appendChild(pOrange);
        board.appendChild(pYellow);
        board.appendChild(pGreen);
        board.appendChild(pBlue);
        board.appendChild(pPurple);
        board.appendChild(pBrown);
        board.appendChild(pBlack);

        const temp = document.querySelectorAll('div[contenteditable=false]');
        temp[1].insertAdjacentElement('afterend',board);


        const blocks = document.querySelectorAll('.notion-page-block a');
        console.log(blocks);

        // const btn = document.querySelectorAll('.pseudoSelection .notion-record-icon[role=button]')[0];
        // console.log(btn);

        // const span = document.querySelectorAll('div[role=row] [role=button] span')
        // const num = span[1].textContent.split(',')
        // console.log(num);
        
        // if(num === 1){
        //     '❤️'
        // }else if(num === 1){
        //     '🧡'
        // }else if(num === 2){
        //     '💛'
        // }else if(num === 3){
        //     '💚'
        // }else if(num === 4){
        //     '💙'
        // }else if(num === 5){
        //     '💜'
        // }else if(num === 6){
        //     '🤎'
        // }else if(num === 7){
        //     '🖤'
        // }

    },2000)
