const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");

const articleBox1 = document.querySelector(".box-response1");
const articleBox2 = document.querySelector(".box-response2");

btnEncriptar.addEventListener("click", () => {
	articleBox2.style.display = "flex";
	articleBox1.style.display = "none";   
	encriptar();
   if(encriptar){
      btnCopiar.style.display = "block";
   }
});

btnDesencriptar.addEventListener("click", () => {
	articleBox2.style.display = "flex";
	articleBox1.style.display = "none";
	desencriptar();
	if (desencriptar) {
		btnCopiar.style.display = "block";
	}
});

const textInput = document.querySelector("#textInput");
const textOutput = document.querySelector("#textOutput");

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
