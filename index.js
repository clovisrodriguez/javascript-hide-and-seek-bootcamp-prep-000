function getFirstSelector(selector) {
  return document.getElementById("app").querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    let value = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = (n + value).toString()
  }
}

function deepestChild() {
  
}