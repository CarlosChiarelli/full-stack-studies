const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const selectEl = document.querySelector("select");

btnEl.addEventListener("click", createMultTable);

function createMultTable() {
	if (inputEl.value) {
		selectEl.innerHTML = "";
		let number = +inputEl.value;

		for (let i = 1; i <= 10; i++) {
			let option = document.createElement("option");
			option.value = i;
			option.textContent = `${number} x ${i} = ${number * i}`;
			selectEl.appendChild(option);
		}
	} else {
		alert("Por favor, digite um número.");
	}
}
