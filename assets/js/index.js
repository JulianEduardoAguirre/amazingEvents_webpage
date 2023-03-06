
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






//SECCION DE FILTRADO USANDO LA BARRA DE BÚSQUEDA Y CHECKBOXES
const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", () => {
	let eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
	// let misEventos = filtroCheckboxes();
	// console.log(misEventos)
	// let eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
	// let eventosFiltrados = misEventos.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))


	// Contenedor de tarjetas
	const div_tarjetas = document.getElementById("cartas");
	//Si tiene contenido, lo elimino primero
	while(div_tarjetas.firstChild) {
						div_tarjetas.removeChild(div_tarjetas.firstChild);
				}

	div_tarjetas.innerHTML = generar_tarjetas2(eventosFiltrados, data.currentDate);


})


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

			console.log(eventosBase)

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

// function aVer(listaDeFiltrado) {
// 	const checkboxes = document.querySelectorAll(".form-check-input")
// 	for (let checkbox of checkboxes){
// 		checkbox.addEventListener("click", function() {
// 			if (listArray1.length != 0){
// 				data.events.forEach(element => {
// 					if(listArray1.includes(element.category)){
// 						eventosFiltradosPorCategoria.push(element)
// 					}
// 				});
				
// 			} else {
// 				return data.events
// 			}
// 		})
// 	}

// }

// let listaCheckboxes = filtroCheckboxes()




