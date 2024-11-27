'use strict'

const visualBlocks = document.querySelectorAll(".visualBlock");
const images = document.querySelectorAll(".visualBlock img");

const resetBlockStyles = () => {
    visualBlocks.forEach(block => {
        block.style.flex = "1";
        block.style.padding = "20px";
    });

    images.forEach(img => {
        img.style.height = "300px";
    });
}

const highlightBlock = (index) => {
    resetBlockStyles();
    if (index === 2) {
        images.forEach(img => {
            img.style.height = "300px";
        });
    } else {
        visualBlocks[index].style.flex = "1 0 auto";
        visualBlocks[(index + 1) % visualBlocks.length].style.flex = "0 0";
        images[index].style.height = "auto";
    }
}

function manageButtonClick(button) {
    const targetIndex = parseInt(button.dataset.target);
    highlightBlock(targetIndex);
}

resetBlockStyles();

document.querySelectorAll(".controlButton").forEach(button => {
    button.addEventListener("click", () => manageButtonClick(button));
});
