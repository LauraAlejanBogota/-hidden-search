const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const imput =document.querySelector(".imput")

btn.addEventListener("click",() => {
    search.classList.toggle("active")
    imput.focus()
})
   