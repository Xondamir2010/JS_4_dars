/*let round = Math.round(8.4);                            /!* Округления *!/
let pow = Math.pow(4,2);                              /!* Степень *!/
let sqrt = Math.sqrt(64);                               /!* корень *!/
let abs = Math.abs(-12.8);                              /!* - сделает + *!/
let ceil = Math.ceil(49.1);                             /!* дает  следующее число *!/
let floor = Math.floor(49.1);                           /!* дает предыдущую цыфру *!/
let min = Math.min(111,75,13,333,125,23,49)         /!* найдет самое маленькое *!/
let max = Math.max(111,75,13,333,125,23,49)         /!* найдет самое большое *!/

document.write(max);*/


let byTag = document.getElementsByTagName("h1")
let byId = document.getElementById("idNomi")
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelector(".classNomi")
let bySelectorAll = document.querySelectorAll(".classNomi")
let byAll = document.getElementsByTagName("h1").namedItem("idNomi")

byAll.style.color = "yellow"
byAll.style.backgroundColor = "green"
byAll.style.width = "300px"
byAll.style.textAlign = "center"

console.log(byAll);










