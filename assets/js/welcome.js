const buttonConfirm = document.querySelector(".swal2-confirm");
window.addEventListener("load", () => {
	Swal.fire({
		width: 400,
		heigth: 400,
		background: "#c8d7f9",
		position: "center",
		title: "Bienvenidos al Challenge1 ONE !!",
		imageUrl: "./assets/img/one.png",
		toast: true,
		padding: "3em",
		position: "center",
		color: "#716add",
		backdrop: true,
	});
});

const duration = 3 * 1000,
	animationEnd = Date.now() + duration,
	defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

const interval = setInterval(function () {
	const timeLeft = animationEnd - Date.now();

	if (timeLeft <= 0) {
		return clearInterval(interval);
	}

	const particleCount = 50 * (timeLeft / duration);

	// since particles fall down, start a bit higher than random
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
		})
	);
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
		})
	);
}, 150);
