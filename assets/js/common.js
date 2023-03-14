// DATA SOURCES
let apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
let localData = "./assets/amazing_1.json";


// SET WITH THE CATEGORIES
const categorySetGenerator = (allEvents) => {
	let categoriesSet = new Set();
	allEvents.forEach( evento => categoriesSet.add(evento.category) )
	// return [...categoriesSet];																												// Return as an Array
	return categoriesSet;																																// Return as Set
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


// SIMGLE CARD GENERATOR
function generate_card(evento, refDate){

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
function generar_tarjetas2(events, refDate){

	let cardsHTML = `<div class="d-flex flex-wrap my-5 justify-content-around">`

	if (events.length != 0){
		events.forEach((event) => {
			cardsHTML += generate_card(event, refDate)
		})
	} else {
		cardsHTML += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
	}

	return cardsHTML + `</div>`
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

	const div_tarjetas = document.getElementById("cartas");
	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
}


// FILTER BASED ON FILTER SECTION
function filterContent2(my_object) {
	// Checkboxes (only selected)
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	// Input search current value
	let searchWord = document.getElementById("search").value.toLowerCase();
	
	let filteredEvents = filterByDate2(my_object.currentTarget.myParam)																				//Initially, got all events

	// data object filter section
	if ( categoriesFound.length != 0){
		filteredEvents = filteredEvents.filter( evento => categoriesFound.includes(evento.category))
	}

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
	}

	const cards_div = document.getElementById("cartas");
	cards_div.innerHTML = generar_tarjetas2(filteredEvents, my_object.currentTarget.myParam.currentDate);
}


// FILTER BASED ON DATE (BASED ON CURRENT URL)           NOT USED
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



function filterByDate2(my_object) {

	let currentURL = window.location.href
	let eventsFilteredByDate = my_object.events
	if( currentURL.includes("upcoming")){
		eventsFilteredByDate = my_object.events.filter( e => e.date >= my_object.currentDate)
	} else if (currentURL.includes("past")){
		eventsFilteredByDate = my_object.events.filter( e => e.date < my_object.currentDate)
	}

	return eventsFilteredByDate;
}


function generateStats(dataObject) {

	// FOR MAJOR CAPACITY
	let capacitiesAll = []
	dataObject.events.forEach(event => capacitiesAll.push(event.capacity))

	// higher capacity events
	let majorCapacity = dataObject.events.filter( event => event.capacity == Math.max(...capacitiesAll))


	// ATTENDANCE PERCENTAGES
	let percentages = []

	dataObject.events.forEach(event => percentages.push({
		_id: event._id,
		name: event.name,
		capacity: event.capacity,
		attendance: event.hasOwnProperty("assistance") ? event.assistance : event.estimate,
		percentage: (event.hasOwnProperty("assistance") ? event.assistance : event.estimate) / event.capacity * 100
	})) 


	// let maximumPerc = Math.max.apply(Math, percentages.map(event => event.percentage));
	// let arrayMaximunAtt = percentages.filter(event => event.percentage == maximumPerc)
	let arrayMaximunAtt = percentages.filter(event => event.percentage == Math.max.apply(Math, percentages.map(event => event.percentage)))

	// let minimumPerc = Math.min.apply(Math, percentages.map(event => event.percentage));
	// let arrayMinimunAtt = percentages.filter(event => event.percentage == minimumPerc)
	let arrayMinimunAtt = percentages.filter(event => event.percentage == Math.min.apply(Math, percentages.map(event => event.percentage)))

	let maxCapLenght = majorCapacity.length
	let maxAttLenght = arrayMaximunAtt.length
	let minAttLenght = arrayMinimunAtt.length

	let mayorLenght = Math.max(maxCapLenght, maxAttLenght, minAttLenght)


	// STATS BY CATEGORY (FUTURE EVENTS AND PAST EVENTS)

	// Arranged to store categories for each time period (upcomind or past)
	// let upcomingCategories = catArrayGenerator(dataObject.events.filter( e => dataObject.currentDate >= e.date));
	let upcomingCategories = categorySetGenerator(dataObject.events.filter( e => dataObject.currentDate >= e.date));
	let pastCategories = categorySetGenerator(dataObject.events.filter( e => dataObject.currentDate < e.date));


	let upcomingEventsStats = []
	upcomingCategories.forEach( catName => upcomingEventsStats.push(generateCategoryStats(catName, dataObject.events.filter(event => dataObject.currentDate >= event.date))) )

	let pastEventsStats = []
	pastCategories.forEach( catName => pastEventsStats.push(generateCategoryStats(catName, dataObject.events.filter(event => dataObject.currentDate < event.date))) )


	let allStats = {
		cota: mayorLenght,
		// maxCap: arrayEqualizer(mayorLenght, majorCapacity),
		// maxPerc: arrayEqualizer(mayorLenght, arrayMaximunAtt),
		// minPerc: arrayEqualizer(mayorLenght, arrayMinimunAtt),
		maxCap: majorCapacity,
		maxPerc: arrayMaximunAtt,
		minPerc: arrayMinimunAtt,
		upcoming: upcomingEventsStats,
		past: pastEventsStats
	}

	return allStats;

}


// Categories Array Generator (NOT USED?)

// let catArrayGenerator = (eventsArray) => {
// 	let catSet = new Set();
// 	eventsArray.forEach(event => catSet.add(event.category))
// 	return [...catSet]
// }


// Generic category stats generator
let generateCategoryStats = (categoryName, eventsArray) => {
	let categoryData = {
		category: categoryName,
		attendanceTotal: 0,
		capacityTotal: 0,
		revenue: 0,
	}
	eventsArray.filter( event => {if(event.category == categoryName) {
		categoryData.attendanceTotal += event.hasOwnProperty("assistance") ? event.assistance : event.estimate;
		categoryData.capacityTotal += event.capacity
		categoryData.revenue += (event.price * (event.hasOwnProperty("assistance") ? event.assistance : event.estimate) )
	}})

	return categoryData;
}


// Generates a new array with it's original content and filling the rest of its values with an empty string  (ANOTHER NOT USED!!)
// let arrayEqualizer = function(cota, arrToEq) {
// 	let arrRtn = []
// 	for (let index = 0; index < cota; index++) {
// 		if (arrToEq[index] === undefined){
// 			arrRtn.push("")
// 		} else {
// 			arrRtn.push(arrToEq[index])
// 		}
		
// 	}
// 	return arrRtn;	
// }


