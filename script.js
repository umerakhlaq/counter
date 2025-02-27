let count = 0;
const countDisplay = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const buttonClass = event.currentTarget.classList;

        if (buttonClass.contains("increase")) {
            count++;
        } else if (buttonClass.contains("decrease")) {
            count--;
        } else if (buttonClass.contains("reset")) {
            count = 0;
        }

        countDisplay.textContent = count;
    });
});
