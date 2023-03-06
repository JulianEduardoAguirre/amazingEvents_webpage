
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







//SECCION DE FILTRADO USANDO LA BARRA DE BÚSQUEDA Y CHECKBOXES
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


//PRUEBAS PARA LOS CHECHBOXES


function filtroCheckboxes() {
	var listArray1 = []
	var nuevosFiltrados = []
	const checkboxes = document.querySelectorAll(".form-check-input")
	
	for(let checkbox of checkboxes) {
		// console.log(checkbox.getAttribute("value"))
		checkbox.addEventListener("click", function() {
			// console.log(listArray1)
			if(this.checked == true) {
				listArray1.push(checkbox.getAttribute("value"));
				nuevosFiltrados = data.events.filter((evento) => evento.category.includes(checkbox.getAttribute("value")))
				console.log(nuevosFiltrados)

			}
			else {
				listArray1 = listArray1.filter(e => e !== this.value)
			}
		})
	}
	
	console.log(nuevosFiltrados)
	return nuevosFiltrados
}

const listaCheckboxes = filtroCheckboxes()


function dataFiltradoCheckboxes(datos, listas) {
	let nuevosFiltrados = datos.events.filter((evento) => listas.includes(evento.category))
	console.log(listas)
	console.log(datos.events)
	console.log(nuevosFiltrados)
	return nuevosFiltrados;
}

// nuevosDatos = dataFiltradoCheckboxes(data, listaCheckboxes)



