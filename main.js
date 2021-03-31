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

//Mouseover event listener and function which colors div

container.addEventListener('mouseover', e => {
    if (e.target.classList.contains('containers')) {
e.target.style.backgroundColor = "black";
    }
});

//Button to clear grid

let clearBtn = document.querySelector('.clearBtn');
let divs = document.querySelectorAll('.containers');

clearBtn.addEventListener('click', () => {
    for (i = 0; i < 256; i++) {
container.children[i].setAttribute("style", "background-colo: black");
    }
});

