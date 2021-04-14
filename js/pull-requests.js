function postArray(array) {
  var ul = document.querySelector("#pull-requests-list");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  array.forEach(item => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerText = item.login + " - " + item.title;
    a.href = item.url;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

async function getRepos(URL, value) {
  const data = await fetch(URL);
  const response = await data.json();
  var array = [];
  response.map(function(pr) {
    array.push({
      login: pr.user.login,
      title: pr.title,
      url: pr.url
    });
  });
  // console.log(array);
  postArray(array);

  const interval = setInterval(() => {
    input.addEventListener("keyup", async event => {
      const value = event.target.value;
      console.log(value);
      arrayF = array.filter(item => item.login.includes(value));
      // console.log(arrayF);
      postArray(arrayF);
    });
  }, 500);
}

var input = document.querySelector("#userName");
const URL = "https://api.github.com/repos/codeyourfuture/js-exercises/pulls";
getRepos(URL);
