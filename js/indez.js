document.getElementById("submitButton").addEventListener("click", function () {
	
	var inputdivisor = document.createElement("div");
	var inputcheckbox = document.createElement("input");
	inputcheckbox.type = "checkbox";
	var texto = document.createTextNode(document.getElementById("newTodo").value);
    document.getElementById("newTodo").value = ' ';

    inputdivisor.appendChild(inputcheckbox);
	inputdivisor.appendChild(texto);
    document.getElementById("lista").appendChild(inputdivisor);
});

document.getElementById("deleteButton").addEventListener("click", function () {
	var nodos = document.getElementById("lista");
	while (nodos.firstChild) {
		nodos.removeChild(nodos.firstChild);
	}
});

document.getElementById("markAllButton").addEventListener("click", function () {
	var nodos = document.getElementById("lista").childNodes;
	for (var i = 0; i < nodos.length; i++) {
		nodos[i].firstChild.checked = true;
	}
});

document.getElementById("clearButton").addEventListener("click", function () {
	var nodos = document.getElementById("lista").childNodes;
	for (var i = 0; i < nodos.length; i++) {
		nodos[i].firstChild.checked = false;
	}
});
