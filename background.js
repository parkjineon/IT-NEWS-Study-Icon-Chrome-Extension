
function refresh() {
    window.location.reload();
  };
chrome.tabs.query({ active: true, currentWindow: true })
chrome.scripting.executeScript({
    target:{
        tabId: tabs[0].id,
        files: refresh
    }
})

// chrome extension 공부