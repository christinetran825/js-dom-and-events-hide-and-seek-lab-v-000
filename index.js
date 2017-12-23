function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // return document.querySelector('#nested .target')
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  const grandNodeDivs = document.getElementById('grand-node').querySelectorAll('div')
  return grandNodeDivs[grandNodeDivs.length -1 ];
}

function increaseRankBy(n) {
  const ranked = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i])+1;
  }
}
