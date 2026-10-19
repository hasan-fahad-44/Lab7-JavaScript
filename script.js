const form = document.getElementById("colorForm");
const heading = document.getElementById("heading");
const colorInput = document.getElementById("colorInput");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const color = colorInput.value.trim();
    heading.style.color = color;
});
