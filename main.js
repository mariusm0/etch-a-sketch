//Add event listener which fires once window is loaded and creates 16 x 16 grid

let container = document.querySelector(".container");

window.addEventListener('load', (event) => {
    let htmlElements = 256;

    for (let i = 0; i < htmlElements; i++) {
        let containers = document.createElement("div");
        containers.className = "containers";
        container.appendChild(containers);
    }
});

//Mouseover event listener and function which colors div

container.addEventListener('mouseover', e => {
e.target.style.backgroundColor = "black";
});


