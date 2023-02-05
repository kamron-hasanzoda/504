// querySelector
let onclicks = document.querySelector('.onclick')
let img = document.querySelector('.imgg img')
let item = document.querySelector('.item')
let saloni = document.querySelector('.saloni')
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let gray = document.querySelector('.gray')

// createElement
let salon1 = document.createElement('img')
let salon2 = document.createElement('img')
let salon3 = document.createElement('img')

// func
onclicks.onclick = () => {
    img.setAttribute('src', './img/salon.png')
    item.style.display = 'none'
    saloni.style.display = 'block'
}

gray.onclick = () => {
    img.setAttribute('src', './img/salon1.png')
}

white.onclick = () => {
    img.setAttribute('src', './img/salon2.png')
}

black.onclick = () => {
    img.setAttribute('src', './img/salon3.png')
}