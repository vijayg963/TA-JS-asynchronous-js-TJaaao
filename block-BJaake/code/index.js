let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

let newsElm = document.querySelector('main');

let select = document.getElementById('catalog');

let allNews = [];

function displayUI(news) {
  newsElm.innerHTML = '';
  news.forEach((newsId) => {
    let article = document.createElement('article');
    article.classList.add('flex');
    let img = document.createElement('img');
    img.src = newsId.imageUrl;
    img.alt = newsId.title;
    let div = document.createElement('div');
    div.classList.add('set');
    let span = document.createElement('span');
    span.innerText = newsId.newsSite;
    let h2 = document.createElement('h2');
    h2.innerText = newsId.title;
    let button = document.createElement('button');
    button.innerText = 'Read More';
    let a = document.createElement('a');
    a.href = newsId.url;
    button.append(a);
    div.append(span, h2, button);
    article.append(img, div);
    newsElm.append(article);
  });
}

// let filterSources = news.map((n) => n.newsSite);
// console.log(filterSources);

fetch(url)
  .then((res) => res.json())
  .then((news) => {
    displayUI(news);
    allNews = news;
    let filterSources = Array.from(new Set(news.map((n) => n.newsSite)));
    displayOption(filterSources);
  });

function displayOption(sources) {
  sources.forEach((m) => {
    let option = document.createElement('option');
    option.innerText = m;
    select.append(option);
  });
}

select.addEventListener('change', (event) => {
  let source = event.target.value;
  if (source) {
    var filterNews = allNews.filter((news) => news.newsSite === source);
  } else {
    filterNews = allNews;
  }
  displayUI(filterNews);
});
