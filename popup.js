var button = document.getElementById("button");
var appendText = document.getElementById("appendText");
var appendCharCount = document.getElementById("appendCharCount");

var getSelection = function(){
  chrome.tabs.executeScript(null, {file: "content_script.js"});
};

chrome.runtime.onConnect.addListener(function(port) {
  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(selection) {
    // COME BACK TO THIS - ideally I want this to give
    // the selection text to the outside world,
    // THEN display results elsewhere
    var selectionText = selection.text;
    // var charCount = selectionText.length();
    appendText.innerHTML = "You selected this text: " + selectionText;
    // appendCharCount.innerHTML = charCount + " characters long.";
  });
});

button.addEventListener("click", getSelection);
