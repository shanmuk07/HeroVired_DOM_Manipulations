let para = document.getElementById('paragraph');
let btn = document.getElementById('button');
let inp = document.getElementById('input');
let listItem = document.getElementsByTagName('li');

para.addEventListener("mouseover", () => {
    para.style.color = "red";
})

para.addEventListener("mouseout", () => {
    para.style.color = "black";
})

btn.addEventListener("mouseover", () => {
    btn.innerHTML = "MouseOver"
})

btn.addEventListener("mouseout", () => {
    btn.innerHTML = "click here"
})

inp.addEventListener('click', () => {
    para.innerHTML = inp.value;
})

    for(let i = 0; i < listItem.length; i++){
        listItem[i].addEventListener("mouseover", () => {
            listItem[i].style.color = "blue";
            listItem[i].style.fontWeight = "bold";
        })
        listItem[i].addEventListener('mouseout', () => {
            listItem[i].style.color = "black";
            listItem[i].style.fontWeight = "normal";
        })
    }


