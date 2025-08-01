const container = document.querySelector("#container")
container.style.display = "flex"
container.style.flexWrap = "wrap"

const btn = document.createElement("button")
document.body.prepend(btn);
btn.classList.add("button")
btn.textContent = "CLICK ME"

let side = 16

function createGrid(side){
    container.innerHTML = "";
    for (let i = 0; i < side*side; i++){
        const box = document.createElement("div")
        box.classList.add("box");

        box.style.width = `calc(100% / ${side})`; /* To calculate in CSS */
        box.style.aspectRatio = 1
        box.style.boxSizing = "border-box" /* Include the padding and border in an element's total width and height */
        box.style.border = "1px solid black";  
        container.appendChild(box)
    }

    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < side*side; i++){
        const box = boxes[i]
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "green"
        });

        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "white"
        });
    }
}

btn.addEventListener("click", () => {
    do {
        side = prompt("ENTER NUMBER OF SQUARES PER SIDE (max 100)")
    } while (side > 100)

    createGrid(side)
})

