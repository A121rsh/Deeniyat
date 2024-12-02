const tarjumas = document.querySelectorAll(".tarjuma");
const buttons = document.querySelectorAll(".bt");

// Track states for each tarjuma
const states = Array.from(tarjumas).map(() => 0); // Initialize all states to 0

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (states[index] === 0) {
            tarjumas[index].style.display = "block";
            states[index] = 1;
        } else {
            tarjumas[index].style.display = "none";
            states[index] = 0;
        }
    });
});
