//Add event listener which fires once window is loaded and creates 16 x 16 grid

let container = document.querySelector(".container");

window.addEventListener('load', () => {
    let htmlElements = 256;

    for (let i = 0; i < htmlElements; i++) {
        let containers = document.createElement("div");
        containers.className = "containers";
        container.appendChild(containers);
    }
});

//Mouseover event listener and function which colors div in black
let blackBtn = document.querySelector('.blackBtn');

blackBtn.addEventListener('click', (e) => {

    container.addEventListener('mouseover', e => {

        if (e.target.classList.contains('containers')) {
            e.target.style.backgroundColor = "black";
        }
    })
});

//Button to clear grid

let clearBtn = document.querySelector('.clearBtn');
let divs = document.querySelectorAll('.containers');

clearBtn.addEventListener('click', () => {
    for (i = 0; i < 256; i++) {
        container.children[i].setAttribute("style", "background-colo: black");
    }
});

//Function to generate random RGB based color

let colorBtn = document.querySelector('.colorBtn');

colorBtn.addEventListener('click', (e) => {

    container.addEventListener('mouseover', e => {

        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (e.target.classList.contains('containers')) {
        e.target.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
        }
    })
});


