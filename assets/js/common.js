
// Función 
let buttonClassSelector = (fecha1, fecha2) => {
	let btnClass = '"btn btn-outline-secondary"'
	if (fecha1 < fecha2){
		btnClass = '"btn btn-outline-info"'
	}

	return btnClass;
}


const categorySetGenerator = (data) => {
	let categoriesSet = new Set();
	for (const evento of data.events) {
		categoriesSet.add(evento.category)
	}

	return categoriesSet;
}



const checkBoxGenerator = (data) => {

	categoriesSet = categorySetGenerator(data);

	let checkBoxHTML = `<div class="container d-sm-flex my-1 gap-2">`;

	categoriesSet.forEach(categoria => 
		{ checkBoxHTML += `	<div class="form-check ">
			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"

	return checkBoxHTML;
}

document.getElementById("lupita").addEventListener("click", filtro);

function filtro() {
	// console.log(data)
	const palabraBuscada = document.getElementById("search").value.toLowerCase();
	// console.log(palabraBuscada)
	const mi_array = [];

	data.events.forEach((evento) => {
		if(evento.name.toLowerCase().includes(palabraBuscada)){
			mi_array.push(evento)
		}
	})

	console.log(mi_array);
}





