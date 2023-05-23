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
		warning.style.display = "grid";
		main.style.filter = "blur(10px)";
		boxWarning.style.zIndex = "2";

		setTimeout(() => {
			main.style.filter = "blur(0px)";
			warning.style.display = "none";
			boxWarning.style.zIndex = "0";
			// Revertir el desenfoque después de 2 segundos
		}, 2000);
	} else {
		articleBox2.style.display = "flex";
		articleBox1.style.display = "none";
		btnCopiar.style.display = "block";
		warning.style.display = "none";
		main.style.filter = "blur(0px)";
		encriptar();
	}
});

btnDesencriptar.addEventListener("click", () => {
	if (textInput.value === "") {
		articleBox1.style.display = "flex";
		btnCopiar.style.display = "none";
		articleBox2.style.display = "none";
		warning.style.display = "grid";
		main.style.filter = "blur(10px)";
		boxWarning.style.zIndex = "2";
		setTimeout(() => {
			main.style.filter = "blur(0px)";
			warning.style.display = "none";
			boxWarning.style.zIndex = "0";
			// Revertir el desenfoque después de 2 segundos
		}, 2000);
	} else {
		articleBox2.style.display = "flex";
		articleBox1.style.display = "none";
		btnCopiar.style.display = "block";
		warning.style.display = "none";
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
	if(checkbox.checked){
		navbar.style.top = "2%";
	}else{
		navbar.style.top = "-7%";
	}
});
