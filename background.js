chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  const pattern = new RegExp("^https://.*\\.atlassian\\.net/jira/software/projects/.*/backlog$");
  if (changeInfo.status === "complete" && pattern.test(tab.url)) {
    console.log(`updated: ${tab.url}`);
    chrome.tabs.sendMessage(tabId, 'SET_BG')
  }
});
