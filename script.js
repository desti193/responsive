// //function
// //declaring a funtion in es6
// const funcName = () => {
//     console.log("hello world")
// }
// //calling a function
// funcName()
// funcName()


// //Events
// const main_btn = document.querySelector('#main-button');

// main_btn.addEventListener("click", () => {
//     console.log("button works");
// })
// const main_btn = document.querySelector('#main-button');
// const buttonfunc = () => {
//     console.log("button works");
// }
// main_btn.addEventListener("click", buttonfunc)

// //Classlist
// const modal = document.querySelector("#modal")
// modal.classList.add("show")



const main_btn = document.querySelector('#main-button');
const modal = document.querySelector("#modal")
const modal_btn = document.querySelector("#modal-button")
const nav = document.querySelector("#burger")
const nav_list = document.querySelector("#navigation")

 main_btn.addEventListener("click", () => {
    modal.classList.add("show");
 })

modal_btn.addEventListener("click", () => {
    modal.classList.remove("show")
})

nav.addEventListener("click", () => {
    nav_list.classList.toggle("show")
})
