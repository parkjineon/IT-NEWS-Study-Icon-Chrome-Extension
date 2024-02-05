


chrome.webNavigation.onHistoryStateUpdated.addListener((data)=>{
    console.log("History Stated Updated ")
    if(data.url === "https://www.notion.so/32d985e76cad4e1f96b101285e6500b2?v=460dc7543d1a4b4194e22d5460662666"){
        console.log(data);
        
        chrome.scripting.executeScript({
            target: {tabId: data.tabId},
            files : ["./scripts/content.js"]
        })


        chrome.scripting.insertCSS({
            target: {tabId: data.tabId},
            files:["./scripts/content.css"]
        })

    }
})

