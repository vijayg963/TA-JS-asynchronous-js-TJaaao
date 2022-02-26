let form = document.querySelector('form');
let img = document.querySelector('img');
let name = document.querySelector('h2');
let userName = document.querySelector('.username');
let followers = document.querySelector('.follow');
let following = document.querySelector('.following');
let cat = document.querySelector('.cat');

function displayUI(userData) {
  console.log(userData);
  img.src = userData.avatar_url;
  console.log(userData);
  name.innerText = userData.name;
  userName.innerText = userData.login;
  following.innerText = `Following: ${userData.following}`;
  followers.innerText = `followers: ${userData.followers}`;
}

function handleChange(event) {
  event.preventDefault();
  const value = event.target.elements.search.value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${value}`);
  xhr.onload = function () {
    let userData = JSON.parse(xhr.response);
    displayUI(userData);
  };
  xhr.onerror = function () {
    console.log(`Something went wrong ...`);
  };
  xhr.send();
}

form.addEventListener(`submit`, handleChange);

const imgCat = document.querySelector('.cat img');
const btn = document.querySelector('button');

function handleClick() {
  fetch(
    `https://api.unsplash.com/photos/random/?client_id=218rfovrEzjCDabN2xCgnJdI29i4fUdUKmoY45Mo1TQ`    function (catInfo) {
      imgCat.src = catInfo[0].url;
    }
  );
}

btn.addEventListener('click', handleClick);

{
  //218rfovrEzjCDabN2xCgnJdI29i4fUdUKmoY45Mo1TQ
  // https://api.unsplash.com/photos/random/?client_id=218rfovrEzjCDabN2xCgnJdI29i4fUdUKmoY45Mo1TQ
}
