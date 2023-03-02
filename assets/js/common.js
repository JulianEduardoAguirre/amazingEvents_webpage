
// Asignación del tipo de botón "view details" según date de la tarjeta 
let buttonClassSelector = (fecha1, fecha2) => {
	let btnClass = '"btn btn-outline-secondary"'
	if (fecha1 < fecha2){
		btnClass = '"btn btn-outline-info"'
	}

	return btnClass;
}



// FUNCION PARA OBTENER TODAS LAS CATEGORIAS DENTRO DEL OBJETO DATA
const categorySetGenerator = (data) => {
	let categoriesSet = new Set();
	data.events.forEach( evento => categoriesSet.add(evento.category) )
	// console.log(categoriesSet)
	return categoriesSet;
}



// FUNCION PARA GENERAR LOS CHECKBOXES
const checkBoxGenerator = (data) => {

	categoriesSet = categorySetGenerator(data);

	let checkBoxHTML = `<div class="container d-sm-flex my-1 gap-2">`;

	categoriesSet.forEach(categoria => 
		{ checkBoxHTML += `	<div class="form-check ms-2">
			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"

	return checkBoxHTML;
}













