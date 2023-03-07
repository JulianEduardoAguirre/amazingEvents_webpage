
//																															FIRST RENDERING SECTION
// 																																global declarations

// CARDS SECTION
const div_tarjetas = document.getElementById("cartas");
while(div_tarjetas.firstChild) {div_tarjetas.removeChild(div_tarjetas.firstChild);}	  			//Delete all previous content (if exists)

div_tarjetas.innerHTML = generar_tarjetas2(data.events, data.currentDate);									//First time rendering cards (using all data)


// FILTER SECTION (CHECKBOXES & INPUT)

// CHECKBOX CONTAINER
const div_checkboxes = document.getElementById("checkboxes")
while(div_checkboxes.firstChild) { div_checkboxes.removeChild(div_checkboxes.firstChild);}	//Delete all previous content (if exists)

div_checkboxes.innerHTML = checkBoxGenerator(data);																					//First (and unique) time rendering checkboxes



//																												ADDING EVENT LISTENERS FOR FILTER SECTION

const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", filterContent)

const otrosCheckboxes = document.querySelectorAll(".form-check-input")
for (const checkbox of otrosCheckboxes) {
	checkbox.addEventListener("click", filterContent)
}



// let searchWord = "";

// function megaFiltro() {
// 	// Checkboxes (only selected)
// 	let categoriesFound = [];
// 	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

// 	// Input search current value
// 	let searchWord = document.getElementById("search").value.toLowerCase();
	
// 	let filteredEvents = data.events		//Initially, got all events

// 	// data object filter section
// 	if ( categoriesFound.length != 0){
// 		filteredEvents = data.events.filter( evento => categoriesFound.includes(evento.category))
// 	}

// 	if (searchWord != ""){
// 		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
// 	}

// 	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
// }

// FIN DE PRUEBAS DE AHORA






