let changeColor = document.getElementById("changeColor");
let lastart
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });

    console.log('yellow')
    let runSearch = async () =>{
        // I WANT THIS TO GET THE YOUTUBES FIRST DIV NOT THE ORIGINAL PAGE
        let response = await window.open("https://www.youtube.com/results?search_query=chrome+extension+an+beautifulsoup")
        let data = await window.getElementsByTagName("div")[0]
        console.log(data)
    }
    runSearch()


    // console.log("lastart")

    // window.open("https://www.youtube.com/results?search_query=chrome+extension+an+beautifulsoup")
    // let lastart = document.getElementsByTagName("div")[0]
    // console.log(lastart)
    // console.log("lastart")
  }

// let p = new Promise((resolve,reject) =>{
//     let t = window.open("https://www.youtube.com/results?search_query=chrome+extension+an+beautifulsoup")

// })
// p.then((message) =>{
//     console.log('resolve')
//     let lastart = document.getElementsByTagName("div")[0]
// }).catch((message) =>{
//     console.log('reject')
// })

