let div = document.querySelector('.container');
let root = document.querySelector('ul');
let search = document.querySelector('input');
const url =
  'https://api.unsplash.com/photos/?client_id=tD7VjRCaV8lYZhfbemd9uVt8aOkUhfxx-r7B3XRyYik';

const getSearchUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=tD7VjRCaV8lYZhfbemd9uVt8aOkUhfxx-r7B3XRyYik `;

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));

  xhr.onerror = function () {
    console.error('Something went wrong!');
  };
  xhr.send();
}

function displayImages(images) {
  root.innerHTML = '';
  images.forEach((image) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = image.urls.thumb;
    li.append(img);
    root.append(li);
  });
}

fetch(url, displayImages);

function handleSearch(event) {
  if (event.keyCode === 13 && search.value) {
    fetch(getSearchUrl(search.value), (serchResult) =>
      displayImages(serchResult.results)
    );
  }
}

search.addEventListener('keyup', handleSearch);
