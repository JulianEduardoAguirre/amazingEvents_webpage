
// SET WITH THE CATEGORIES
const categorySetGenerator = (allEvents) => {
	let categoriesSet = new Set();
	allEvents.forEach( evento => categoriesSet.add(evento.category) )
	return categoriesSet;
}


// CHECKBOX SQUARES GENERATOR
const checkBoxGenerator = (events) => {

	categoriesSet = categorySetGenerator(events);

	let checkBoxHTML = `<div class="d-flex flex-wrap d-sm-flex my-1 gap-2">`;

	categoriesSet.forEach(categoria => 
		{ checkBoxHTML += `	<div class="form-check ms-2">
			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"

	return checkBoxHTML;
}


// GO TO DETAILS
function viewDetails(card_id) {
	window.location.href = `./details.html?id=${card_id}`
}


// ONE CARD GENERATOR
function generar_tarjeta(evento, refDate){

	return `<div class="mb-4 d-flex justify-content-center" onclick="viewDetails(${evento._id})">
	<div class="card h-100">
		<img src="${evento.image}" class="card-img-top" alt="${evento.name} image">
		<div class="card-body">
		<h5 class="card-title text-center">${evento.name}</h5>
		<div class="d-flex mb-0 justify-content-evenly">
			<p class="card-price d-inline mb-0"><small>${evento.date}</small></p>
			<p class="card-price d-inline mb-0"><strong>$${evento.price}</strong></p>
		</div>
		<hr class="mb-2 mt-2">
			<p class="card-text mb-2">${evento.description}</p>
		</div>
		<div class="card-footer">
		<btn onclick="viewDetails(${evento._id})" class=${refDate >= evento.date ? '"btn btn-outline-secondary"':'"btn btn-outline-info"'} >View Details</btn>
		</div>
	</div>
</div>
`
}


// ALL-CARDS GENERATOR FUNCTION
function generar_tarjetas2(eventos, fechaRef){

	let html_tarjetas = `<div class="d-flex flex-wrap my-5 justify-content-around">`

	if (eventos.length != 0){
		eventos.forEach((evento) => {
			html_tarjetas += generar_tarjeta(evento, fechaRef)
		})
	} else {
		html_tarjetas += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
	}

	return html_tarjetas + `</div>`
}


// FILTER BASED ON FILTER SECTION
function filterContent() {
	// Checkboxes (only selected)
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	// Input search current value
	let searchWord = document.getElementById("search").value.toLowerCase();
	
	let filteredEvents = filterByDate()		//Initially, got all events

	// data object filter section
	if ( categoriesFound.length != 0){
		filteredEvents = filteredEvents.filter( evento => categoriesFound.includes(evento.category))
	}

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
	}

	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
}


// FILTER BASED ON DATE (BASED ON CURRENT URL)
function filterByDate() {
	let currentURL = window.location.href
	let eventsFilteredByDate = data.events
	if( currentURL.includes("upcoming")){
		eventsFilteredByDate = data.events.filter( e => e.date >= data.currentDate)
	} else if (currentURL.includes("past")){
		eventsFilteredByDate = data.events.filter( e => e.date < data.currentDate)
	}

	return eventsFilteredByDate;
}


function generateStats() {
	// console.log(data)
	// console.log(data.currentDate)
	// console.log(data.events)
	// console.log(data.events.length)

	let capacidades = []

	data.events.forEach(event => capacidades.push(event.capacity))
	// console.log(capacidades)
	// console.log(Math.max(...capacidades))

	//Mayor capacidad
	let mayorCapacidad = data.events.filter( event => event.capacity == Math.max(...capacidades))
	// console.log(mayorCapacidad[0].name)

	let percentages = []
	data.events.forEach(event => percentages.push({
		_id: event._id,
		name: event.name,
		capacity: event.capacity,
		attendance: event.hasOwnProperty("assistance") ? event.assistance : event.estimate,
		percentage: (event.hasOwnProperty("assistance") ? event.assistance : event.estimate) / event.capacity * 100
	})) 

	// console.log(percentages)

	let maximumPerc = Math.max.apply(Math, percentages.map(event => event.percentage));
	// console.log(maximumPerc)

	let arrayMaximunAtt = percentages.filter(event => event.percentage == maximumPerc)
	// console.log(arrayMaximunAtt)

	let minimumPerc = Math.min.apply(Math, percentages.map(event => event.percentage));
	// console.log(minimumPerc)

	let arrayMinimunAtt = percentages.filter(event => event.percentage == minimumPerc)
	// console.log(arrayMinimunAtt)

	let categoriesSet = new Set()
	data.events.forEach(event => categoriesSet.add(event.category))
	// console.log(categoriesSet) 
	// console.log(categoriesSet[0])
	let categoriesArray = [...categoriesSet]
	// console.log(categoriesArray)



	let generateCategoryStats = (categoryName, eventsArray) => {
		// console.log(categoryName)
		let datos = {
			category: categoryName,
			attendanceTotal: 0,
			capacityTotal: 0,
			revenue: 0,
		}
		eventsArray.filter( event => {if(event.category == categoryName) {
			datos.attendanceTotal += event.hasOwnProperty("assistance") ? event.assistance : event.estimate;
			datos.capacityTotal += event.capacity
			datos.revenue += (event.price * (event.hasOwnProperty("assistance") ? event.assistance : event.estimate) )
		}})

		return datos;
	}

	// console.log(generateCategoryStats(categoriesArray[1], data.events))

	let upcomingEventsStats = []
	categoriesArray.forEach( catName => upcomingEventsStats.push(generateCategoryStats(catName, data.events.filter(event => data.currentDate >= event.date))) )

	let pastEventsStats = []
	categoriesArray.forEach( catName => pastEventsStats.push(generateCategoryStats(catName, data.events.filter(event => data.currentDate < event.date))) )

	// console.log(upcomingEventsStats)
	// console.log(pastEventsStats)


	let todo = {
		maxCap: mayorCapacidad[0].name,
		maxPerc: arrayMaximunAtt[0].name,
		minPerc: arrayMinimunAtt[0].name,
		upcoming: upcomingEventsStats,
		past: pastEventsStats
	}

	return todo;

}


// generateStats();
let urlApi = ""
let urlPokeApi = "https://pokeapi.co/api/v2/pokemon/ditto"
let dataDir = "./assets/amazing_1.json"

var algo = {}

async function retrieveData() {
	try{
		// const response = await fetch(dataDir);
		const response = await fetch(dataDir);
		// console.log(response)

		const retrievedData = await response.json();
		// console.log(retrievedData)

		return retrievedData;

	} catch (error) {
		console.error(error);
	}

}

let my_data = {}
var currentUno = ""
let currentEvs = []

const ultima = function () {
	let a;
	let b;
	fetch(dataDir)
	.then(response => response.json())
	.then( datos => {
		// console.log(datos)
		// console.log(typeof(datos))
		// console.log(datos.currentDate)
		// console.log(datos.events)

		a = datos.currentDate
		b = datos.events

		return {a, b}

		// my_data.currentDate = datos.currentDate;
		// currentUno = datos.currentDate;
		// my_data.events = datos.events;
		// currentEvs = [...datos.events];
		// console.log(my_data)
		// return currentUno
	})
}




console.log(ultima())
// console.log(b)

// console.log("-----------")
// console.log(currentUno)
// console.log(currentEvs)