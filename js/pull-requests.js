// const getPRs = function (URL) {
//     return fetch(URL)
//         .then(data => data.json())
//         .then(function (response) {
//             var ul = document.querySelector("#pull-requests-list");
//             var userName = document.querySelector("#userName").value.trim();
//             return response.map(function (pr) {
//                 // console.log(rep.title);
//                 // if (pr.user.login === userName) {
//                 var li = document.createElement("li");
//                 var a = document.createElement("a");
//                 a.innerText = pr.title;
//                 a.href = pr.url;
//                 li.appendChild(a);
//                 ul.appendChild(li);
//                 return pr.title;
//                 // }

//             });
//         });
// };

// input is a DOM element we already have using "querySelector"
var input = document.querySelector("#userName");
input.addEventListener("keyup", event => {
  // (URL) => {
  const value = event.target.value;
  console.log(value);
  return fetch(URL)
    .then(data => data.json())
    .then(function(response) {
      var ul = document.querySelector("#pull-requests-list");
      // var userName = document.querySelector("#userName").value.trim();
      return response.map(function(pr) {
        // console.log(rep.title);
        if (pr.user.login.includes(value)) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.innerText = pr.title;
          a.href = pr.url;
          li.appendChild(a);
          ul.appendChild(li);
          return pr.title;
        }
      });
    });
  // };
  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});

const URL = "https://api.github.com/repos/codeyourfuture/js-exercises/pulls";
// getPRs(URL);
