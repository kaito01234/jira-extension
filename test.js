window.onload = function () {
  let bodyText = document.body.innerHTML;
  bodyText = bodyText.replace(/Dashboard/g, "置き換え");
  document.body.innerHTML = bodyText;
};
