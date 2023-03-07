
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


let listaCheckboxes = filtroCheckboxes()


const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", megaFiltro)
const otrosCheckboxes = document.querySelectorAll(".form-check-input")
for (const checkbox of otrosCheckboxes) {
	checkbox.addEventListener("click", megaFiltro)
}



// OKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKO
//SECCION DE FILTRADO USANDO LA BARRA DE BÚSQUEDA Y CHECKBOXES
// const inputSearch = document.getElementById("search")
// inputSearch.addEventListener("input", () => {
	// let eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))

	// Contenedor de tarjetas
	// const div_tarjetas = document.getElementById("cartas");
	//Si tiene contenido, lo elimino primero
	// while(div_tarjetas.firstChild) {
						// div_tarjetas.removeChild(div_tarjetas.firstChild);
				// }

	// div_tarjetas.innerHTML = generar_tarjetas2(eventosFiltrados, data.currentDate);


// })
// OKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKO


//PRUEBAS PARA LOS CHECHBOXES


function filtroCheckboxes() {
	// var listArray1 = []	
	// let eventosBase = data.events
	const inputSearch = document.getElementById("search");
	let eventosBase;
	
	let eventosFiltradosPorCategoria = []	
	const checkboxes = document.querySelectorAll(".form-check-input")
	let subArray;


	for(let checkbox of checkboxes) {
		checkbox.addEventListener("click", function() {

			if(inputSearch.value == ""){
				eventosBase = data.events
			} else {
				eventosBase = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
			}

			// console.log(eventosBase)

			if(this.checked == true) {
				// listArray1.push(checkbox.getAttribute("value"));


				// subArray = data.events.filter((evento) => evento.category.includes(checkbox.getAttribute("value"))).forEach(e => eventosFiltradosPorCategoria.push(e))
				subArray = eventosBase.filter((evento) => evento.category.includes(checkbox.getAttribute("value"))).forEach(e => eventosFiltradosPorCategoria.push(e))
				// console.log(subArray)



				// subArray.forEach(e => eventosFiltradosPorCategoria.push(e))
				// data.events.filter((evento) => eventosFiltradosPorCategoria.push(evento.category.includes(checkbox.getAttribute("value"))))
			}
			else {
				// listArray1 = listArray1.filter(e => e !== this.value)
				eventosFiltradosPorCategoria = eventosFiltradosPorCategoria.filter(e => e.category !== this.value)
			}
			// nuevosFiltrados = data.events.filter((evento) => evento.category.includes(checkbox.getAttribute("value")))
			// console.log(eventosFiltradosPorCategoria)
			// console.log(eventosBase)

			// if(eventosFiltradosPorCategoria.length == 0) {
			// 	div_tarjetas.innerHTML = generar_tarjetas2(data.events, data.currentDate);
			// } else {
			// 	div_tarjetas.innerHTML = generar_tarjetas2(eventosFiltradosPorCategoria, data.currentDate);
			// }
		
				div_tarjetas.innerHTML = generar_tarjetas2(eventosFiltradosPorCategoria, data.currentDate);

		})
	}






	return eventosFiltradosPorCategoria;

}





// PRUEBAS DE AHORA
const searchBoxesContent = document.querySelectorAll(".form-check-input")
const inputContent = document.getElementById("search")

// let categoriesFound = [];
let searchWord = "";

function megaFiltro() {
	// Checkboxes
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})
	searchWord = document.getElementById("search").value.toLowerCase();
	
	// console.log(categoriesFound)
	// console.log(searchWord)

	let filteredEvents = []

	// SECCION DE FILTRADO DEL OBJETO DATA
	if ( categoriesFound.length != 0){
		filteredEvents = data.events.filter( evento => categoriesFound.includes(evento.category))
		// console.log("TENGO MÄS DE 0 CATEGORIAS")
		// console.log("----------------------------------")
		// console.log(filteredEvents)
		// console.log("----------------------------------")
	}
	//  else {
	// 	console.log("Estoy vacío")
	// }

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
		// console.log("************************************")
		// console.log(filteredEvents)
		// console.log("************************************")
	}
	//  else {
	// 	console.log("El input está vacío")
	// }

	// HASTA AQUI PERFECTO: TENGO LOS EVENTOS FILTRADOS


	console.log(`Hasta aquí, tenemos esta cantidad de eventos: ${filteredEvents.length}`)


}

// megaFiltro()
// FIN DE PRUEBAS DE AHORA






