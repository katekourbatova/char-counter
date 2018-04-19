var selection = {
  "text": window.getSelection().toString()
};

chrome.runtime.connect().postMessage(selection);