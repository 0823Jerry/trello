let data;
let body = document.querySelector('body');

fetch("https://api.trello.com/1/lists/650f9d4a89797b222e5736b2/cards?key=d9a6c3dd63adb1d4cc6516e2dcc0f257&token=ATTAc6649256e1d016a81e890cff6495ec7d16cf80de8b37866cfc58eb76c3f4ef288161DB98")
  .then((response) => response.json())
  .then((json) => {
  data = json
  for (i in data){
    let d = document.createElement('div')
    d.textContent = data[i].desc
    body.appendChild(d)
  }
});

