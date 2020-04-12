let getPosts = () =>{
    fetch("db.json")
    .then(response => response.json())
    .then((json) => {
        console.log(json)
       return json;
    })
    .then((data)=>{
        createPost(data)
    })
}


let createPost = (data) => {
    const list = document.getElementById("list");
    for(i = 0; i < 10; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerHTML =  `${data[i].title} <img src=${data[i].img}>`;
        li.classList.add("book")
        list.appendChild(li).append(a)
    }
}

window.addEventListener("load", getPosts);

let filterBooks = () => {

    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


let showAllBooks =()=>{
   document.querySelectorAll(".book").forEach( el => el.style.display = "block");
   document.getElementById("search").value = "";
}


document.getElementById("showAll").addEventListener("click", showAllBooks);
