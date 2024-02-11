


chrome.webNavigation.onHistoryStateUpdated.addListener((data)=>{
    if(data.url === "https://www.notion.so/32d985e76cad4e1f96b101285e6500b2?v=460dc7543d1a4b4194e22d5460662666"){
        chrome.scripting.executeScript({
            target: {tabId: data.tabId},
            files : ["./scripts/createHeartList.js"]
        })


        chrome.scripting.insertCSS({
            target: {tabId: data.tabId},
            files:["./scripts/content.css"]
        })
        
    }
    
    if(data.url.includes("https://www.notion.so/32d985e76cad4e1f96b101285e6500b2?v=460dc7543d1a4b4194e22d5460662666&p=") ){
        console.log("블록 입성")
        chrome.scripting.executeScript({
            target: {tabId: data.tabId},
            files : ["./scripts/matchIcon.js"]
        })
        
    }
    //chrome.tabs for reload
})

