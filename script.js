//task-1
// const getLink = () =>{
//     return document.querySelector("a").innerText
// }
// getLink(getLink());

//task-2
// const getLinks = () => {
//     let arr = document.querySelectorAll("a")
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr = [...newArr, arr[i].innerText]
//     }
//     return newArr
// }
// console.log(getLinks());

//task-3
// const getNavLinks = () =>{
//     let arr = Array.from(document.querySelectorAll(".nav__link__item"))
// return arr.map((el) => {
//     return el.innerText
// })
// }
// console.log(getNavLinks());

//task-4
// const  getArr = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link__item"))
//     return arr.map((el) => {
//         return el.className
//     })
// }
// console.log(getArr())

//task-5
// const getData = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         return el.dataset.link
//     })
// }
// console.log(getData());

//task-6
// const getNumber = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let str = (el.className.split(" ")[1])
//         let text = el.innerText 
//         if(str === text){
//             return el.text
//         }else{
//             return el.innerText = str
//         }
//     })
// }
// console.log(getNumber())

//task-7
// const getNumber = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let str = (el.className.split(" ")[1])
//         let text = el.innerText 
//         let dataLink = el.dataset.link
//         if(str === text){
//             el.innerText  = dataLink + el.innerText
//             return el
//         }else{
//             el.innerText = dataLink + str
//             return el
//         }
//     })
// }
// console.log(getNumber())

//task-8
// let arr = document.querySelectorAll(".nav__link")
// arr.forEach((el) =>{
//     let str = el.className.split(" ")[1]
//     let text = el.innerText
//     if (str !== text){
//         el.remove()
//     }
// })

//task-9
// const createElement = () =>{
// let appendDiv = document.querySelector("#append-div")
// let newElement = document.createElement("div")
// newElement.id = "#just-text"
// newElement.innerText = "Hello"
// appendDiv.appendChild(newElement)
// return appendDiv
// }
// console.log(createElement())



