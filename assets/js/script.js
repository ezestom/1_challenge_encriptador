const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");

const articleBox1 = document.querySelector(".box-response1");
const articleBox2 = document.querySelector(".box-response2");

const textInput = document.querySelector("#textInput");
const textOutput = document.querySelector("#textOutput");

const warning = document.querySelector(".warning-active");
const main = document.querySelector("main");
const boxWarning = document.querySelector(".box-warning");

btnEncriptar.addEventListener("click", () => {
	if (textInput.value === "") {
		articleBox1.style.display = "flex";
		btnCopiar.style.display = "none";
		articleBox2.style.display = "none";
		Swal.fire({
			position: "center",
			icon: "error",
			title: "Opss! Tienes que escribir algún texto para encriptar.",
			showConfirmButton: false,
			timer: 1500,
			toast: true,
			backdrop: true,
		});
	} else {
		articleBox2.style.display = "flex";
		articleBox1.style.display = "none";
		btnCopiar.style.display = "block";
		encriptar();
	}
});

btnDesencriptar.addEventListener("click", () => {
	if (textInput.value === "") {
		articleBox1.style.display = "flex";
		btnCopiar.style.display = "none";
		articleBox2.style.display = "none";
		Swal.fire({
			position: "center",
			icon: "error",
			title: "Opss! Tienes que escribir algún texto para encriptar.",
			showConfirmButton: false,
			timer: 1500,
			toast: true,
			backdrop: true,
		});
	} else {
		articleBox2.style.display = "flex";
		articleBox1.style.display = "none";
		btnCopiar.style.display = "block";
		desencriptar();
	}
});

function encriptar() {
	let text = textInput.value.toLowerCase();
	let textEncriptado = "";

	textEncriptado = text
		.replace(/e/g, "enter")
		.replace(/i/g, "imes")
		.replace(/a/g, "ai")
		.replace(/o/g, "ober")
		.replace(/u/g, "ufat");

	textOutput.value = textEncriptado;
}

function desencriptar() {
	let text = textInput.value.toLowerCase();
	let textDesencriptado = "";

	textDesencriptado = text
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ai/g, "a")
		.replace(/ober/g, "o")
		.replace(/ufat/g, "u");

	textOutput.value = textDesencriptado;
}

const navbar = document.querySelector(".navbar");
const checkbox = document.querySelector(".checkbox");

document.addEventListener("click", () => {
	checkbox.checked
		? (navbar.style.top = ".5rem")
		: (navbar.style.top = "-3rem");
});
