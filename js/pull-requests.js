const postArray = array => {
  var ul = document.querySelector("#pull-requests-list");

  // clear list of repos
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
};

const getRepos = async URL => {
  const data = await fetch(URL);
  const response = await data.json();
  var array = [];
  response.map(pr => {
    array.push({
      login: pr.user.login,
      title: pr.title,
      url: pr.url
    });
  });
  postArray(array);

  setInterval(() => {
    input.addEventListener("keyup", event => {
      const value = event.target.value;
      var arrayF = array.filter(item => item.login.includes(value));
      postArray(arrayF);
    });
  }, 500);
};

var input = document.querySelector("#userName");
const URL = "https://api.github.com/repos/codeyourfuture/js-exercises/pulls";
getRepos(URL);
