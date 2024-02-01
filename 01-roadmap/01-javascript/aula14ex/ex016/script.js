const btnElCount = document.getElementById("count");
const formEl = document.querySelector("form.inputs");
const resultEl = document.getElementById("result");
const startEl = document.getElementById("start");
const endEl = document.getElementById("end");
const stepEl = document.getElementById("step");

btnElCount.addEventListener("click", count);

function count() {
	if (!startEl.value) {
		resultEl.innerHTML = "Impossível contar";
	} else if (+stepEl.value === 0) {
		resultEl.innerHTML = "Preparando a contagem...";
		alert("Passo inválido! Considerando PASSO 1");
	} else {
		getResult();
	}
}

function getResult() {
	let startValue = Number(startEl.value);
	let endValue = Number(endEl.value);
	let stepValue = Number(stepEl.value);

	resultEl.innerHTML = `Contando:<br>`;

	for (startValue; startValue <= endValue; startValue += stepValue) {
		resultEl.innerHTML += `${startValue} &#x1F449 `;
	}

	resultEl.innerHTML += ` &#x1F3C1 `;
}
