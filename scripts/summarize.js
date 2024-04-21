function getURL() {
  const url = document.querySelectorAll("div[role=row] div[role=cell] a")[0];

  chrome.runtime.sendMessage({ url: url.getAttribute("href") });

  const article = fetch(url.getAttribute("href"), { mode: "no-cors" }).then(
    (data) => {
      console.log(data);
    }
  );
}

getURL();
