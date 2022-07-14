document.getElementById("change").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changeColor,
    });
});
  
function changeColor(){
    current = document.body;
    if (current.style.backgroundColor !== "yellow"){
        current.style.backgroundColor = "yellow";
    } else {
        current.style.backgroundColor = "";
    }
}