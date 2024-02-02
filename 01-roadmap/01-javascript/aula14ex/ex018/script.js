const inpElNum = document.querySelector("input");
const selecEl = document.querySelector("select");
const btnElAdd = document.getElementById("add");
const btnElFin = document.getElementById("finish");
const resultEl = document.getElementById("result");
let numbers = [];

let main = function () {
	btnElAdd.addEventListener("click", addValue);
	btnElFin.addEventListener("click", finish);
};

let addValue = () => {
	resultEl.innerHTML = "";
	if (inpElNum.value === "" || +inpElNum.value < 1 || +inpElNum.value > 100) {
		alert("Valor inválido");
	} else {
		if (numbers.indexOf(+inpElNum.value) === -1) {
			numbers.push(+inpElNum.value);
			let option = document.createElement("option");
			option.value = numbers.length;
			option.textContent = `Valor ${numbers[numbers.length - 1]} adicionado`;
			selecEl.appendChild(option);
		} else {
			alert("Valor já encontrado na lista.");
		}
	}
};

let finish = () => {
	let pLen = document.createElement("p");
	let pMax = document.createElement("p");
	let pMin = document.createElement("p");
	let pSum = document.createElement("p");
	let pMean = document.createElement("p");

	pLen.textContent = `Ao todo, temos ${numbers.length} números cadastrados.`;
	pMax.textContent = `O maior valor informado foi ${Math.max(...numbers)}.`;
	pMin.textContent = `O menor valor informado foi ${Math.min(...numbers)}.`;
	pSum.textContent = `A soma é ${numbers.reduce(
		(total, valor) => total + valor,
		0
	)}.`;
	pMean.textContent = `A média é ${
		numbers.reduce((total, valor) => total + valor, 0) / numbers.length
	}.`;

	resultEl.appendChild(pLen);
	resultEl.appendChild(pMax);
	resultEl.appendChild(pMin);
	resultEl.appendChild(pSum);
	resultEl.appendChild(pMean);
};

main();
