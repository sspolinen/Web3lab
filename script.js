document.addEventListener("DOMContentLoaded", function () {

	const yearSpan = document.querySelector(".year");
	if (yearSpan) {
		const currentYear = new Date().getFullYear();
		yearSpan.textContent = currentYear;
	}

	const loginForm = document.getElementById("login-form");
	if (loginForm) {
		loginForm.addEventListener("submit", function (event) {
			event.preventDefault(); 

			const username = document.getElementById("username").value.trim();
			const password = document.getElementById("password").value.trim();

			if (username === "" || password === "") {
				alert("Please fill in both fields.");
				return;
			}

			alert("Welcome, " + username + "! (Demo only)");
			loginForm.reset();
		});
	}
});
