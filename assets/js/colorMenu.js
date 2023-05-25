const body = document.querySelector("body");
const header = document.querySelector("header");
const images = document.querySelectorAll("img");
const input = document.querySelector("#textInput");

const colorBtn = document.querySelector("#cbx-12");

window.addEventListener("click", () => {
	if (colorBtn.checked) {
		// body.style.backgroundColor = "#564caf";
		body.style.backgroundColor = "#c8d7f9";
		input.style.backgroundColor = "#c8d7f9";
		body.style.transition = "all 0.5s ease";
		input.style.transition = "all 0.5s ease";
	} else if (!colorBtn.checked) {
		body.style.backgroundColor = "#f3f5fc";
		input.style.backgroundColor = "#f3f5fc";
		body.style.transition = "all 0.5s ease";
		input.style.transition = "all 0.5s ease";
	}
});
