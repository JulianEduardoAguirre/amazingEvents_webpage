
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
			<input type="checkbox" class="form-check-input" id="a">
			<label class="form-check-label" for="a">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"
	
	return checkBoxHTML;
}
