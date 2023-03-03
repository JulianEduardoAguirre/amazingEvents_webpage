
// SECCION CARDS
const div_tarjetas = document.getElementById("cartas");
//Si tiene contenido, lo elimino primero
while(div_tarjetas.firstChild) {
					div_tarjetas.removeChild(div_tarjetas.firstChild);
}

// const nuevo = {
// 	currentDate: data.currentDate,
// 	events: []
// }


div_tarjetas.innerHTML = generar_tarjetas2(data.events, data.currentDate);


// SECCION SEARCH FILTER (CHECKBOXES & INPUT)

// CHECKBOX CONTAINER
const div_checkboxes = document.getElementById("checkboxes")
while(div_checkboxes.firstChild) {
	div_checkboxes.removeChild(div_checkboxes.firstChild);
}
// CHECKBOX GENERATOR (from common.js)
div_checkboxes.innerHTML = checkBoxGenerator(data);



//FILTRO?
// const new_data = filtro(data);

// div_tarjetas.innerHTML = generar_tarjetas(data);

const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", () => {
	let eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))


	// Contenedor de tarjetas
	const div_tarjetas = document.getElementById("cartas");
	//Si tiene contenido, lo elimino primero
	while(div_tarjetas.firstChild) {
						div_tarjetas.removeChild(div_tarjetas.firstChild);
				}

	div_tarjetas.innerHTML = generar_tarjetas2(eventosFiltrados, data.currentDate);


})



