// Write code here to communicate with Github

const getRepos = function(repoName) {
  return fetch("https://api.github.com/users/" + repoName + "/repos")
    .then(data => data.json())
    .then(function(response) {
      var ul = document.querySelector("#repos-list");
      // clear list of repos
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      return response.map(function(rep) {
        console.log(rep.name);
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.innerText = rep.name;
        a.href = "https://github.com/" + repoName + "/" + rep.name;
        li.appendChild(a);
        ul.appendChild(li);
        return rep.name;
      });
    });
};

const getNRepos = function(repoName) {
  return fetch("https://api.github.com/users/" + repoName)
    .then(data => data.json())
    .then(function(response) {
      var a = document.querySelector("#repos-count");
      a.innerText = response.public_repos;
      a.href = "https://github.com/" + repoName;
      console.log("Total repos: " + response.public_repos);
      return response.public_repos;
    });
};

function getReposOfUsername() {
  document.getElementById("search").addEventListener("click", () => {
    var userName = document.querySelector("#userName").value.trim();
    console.log(userName);
    getRepos(userName);
  });
  // return userName;
}

getRepos("ArthurNNN");
getNRepos("ArthurNNN");
getReposOfUsername();
console.log("Loading...");
