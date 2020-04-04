async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.status === 404) {
    console.log("Error");
    return false;
  }
  let responseJson = await response.json();
  createPost(responseJson);
}

let createPost = data => {
  const list = document.getElementById("list");
  for (i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.innerText = data[i].title;
    div.classList.add("post");
    list.append(div);
  }
};

document.querySelector(".btn").addEventListener("click", getPosts);
