//Add event listener which fires once window is loaded and creates 16 x 16 grid

window.addEventListener('load', (event) => {
    let container = document.querySelector(".container");
    let htmlElements = 256;

    for (let i = 0; i < htmlElements; i++) {
        let containers = document.createElement("div");
        containers.className = "containers";
        container.appendChild(containers);
    }
});


