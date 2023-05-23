const copyBtn = document.querySelector(".copiar");

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(textOutput.value).then(() => {
		if (textOutput.value === "") {
			Swal.fire({
				position: "center",
				icon: "error",
				title: "Opss, algo salió mal!",
				showConfirmButton: false,
				timer: 1500,
				toast: true,
				backdrop: true,
			});
		} else {
			console.log("Texto copiado en el portapapeles");
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Copiado, en el portapapeles!",
				showConfirmButton: false,
				timer: 1500,
				toast: true,
				backdrop: true,
			});
		}
	});
});
