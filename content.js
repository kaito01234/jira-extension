function replaceLabel(targetTag) {
  const oldLabel = targetTag.innerHTML;
  const regex = /(\d+)\s(\d+)月\s–\s(\d+)\s(\d+)月/;
  const replacement = "$2月$1日 ～ $4月$3日";
  const newLabel = oldLabel.replace(regex, replacement);
  targetTag.innerHTML = newLabel;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request !== 'SET_BG') return
  const cardList = document.querySelectorAll('[data-testid^="software-backlog.card-list.container."]');
  cardList.forEach(card => {
    const targetTag = card.children[0].children[0].children[0].children[2];
    replaceLabel(targetTag);
  });
})
