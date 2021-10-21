const todo = document.getElementById("todo")
todo.onclick=()=>{
  todo.innerHTML="Its clicked!"
  todo.style.color="red"
}
const navLists =document.getElementsByClassName("nav-list")
let nav=document.getElementsByClassName("nav")

nav=nav[0]

nav.onclick=()=>{
  Array.from(navLists).forEach(n=>{
    n.style.color="Black"
  })

    }

