
//Mouseover event listener and function which colors div in black

let container = document.querySelector(".container");

let blackBtn = document.querySelector('.blackBtn');

blackBtn.addEventListener('click', (e) => {

    container.addEventListener('mouseover', e => {

        if (e.target.classList.contains('containers')) {
            e.target.style.backgroundColor = "black";
        }
    })
});

//Function to generate random RGB based color

let colorBtn = document.querySelector('.colorBtn');

colorBtn.addEventListener('click', () => {

    container.addEventListener('mouseover', e => {

        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (e.target.classList.contains('containers')) {
            e.target.style.backgroundColor = "#" + randomColor;
        }
    })
});

//Function to change grid size

$(document).ready(function () {
    grid(16, 16);
});

$(".button").click(function () {
    var size = prompt("Please select your grid size from 1-64");
    grid(size, size);
});

function grid(rows, cols) {
    var table = "<table>";
    var size = (1 / rows * 525) + "px";

    for (i = 0; i < rows; i++) {
        table += "<tr>";
        for (j = 0; j < cols; j++) {
            table += "<td>" + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    $(".container").empty().append(table);
    $("tr").css("height", size);
    $("td").css("color", "black").css("width", size);
    $("td").addClass("containers");
};

//Button to clear grid

let clearBtn = document.querySelector('.clearBtn');
let tds = document.getElementsByTagName('td');

clearBtn.addEventListener('click', () => {
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.backgroundColor = "transparent";
    }
});


