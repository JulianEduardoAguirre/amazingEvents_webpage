// DATA SOURCES
let apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
let localData = "./assets/amazing_1.json";


// GO TO DETAILS
function viewDetails(card_id) {
	window.location.href = `./details.html?id=${card_id}`
}


// SET WITH THE CATEGORIES
// const categorySetGenerator = (allEvents) => {
// 	let categoriesSet = new Set();
// 	allEvents.forEach( evento => categoriesSet.add(evento.category) )
// 	// return [...categoriesSet];																												// Return as an Array
// 	return categoriesSet;																																// Return as Set
// }

const categorySetGenerator2 = (myObj) => {
	let categoriesSet = new Set();
	myObj.events.forEach( evento => categoriesSet.add(evento.category) )
	// return [...categoriesSet];																												// Return as an Array
	return categoriesSet;																																// Return as Set
}


// CHECKBOX SQUARES GENERATOR
// const checkBoxGenerator = (events) => {

// 	categoriesSet = categorySetGenerator(events);

// 	let checkBoxHTML = `<div class="d-flex flex-wrap d-sm-flex my-1 gap-2">`;

// 	categoriesSet.forEach(categoria => 
// 		{ checkBoxHTML += `	<div class="form-check ms-2">
// 			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
// 			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
// 			</div>`
		
// 		});

// 	checkBoxHTML += "</div>"
// 	return checkBoxHTML;
// }


const checkBoxGenerator2 = (categoriesArray) => {


	let checkBoxHTML = `<div class="d-flex flex-wrap d-sm-flex my-1 gap-2">`;

	categoriesArray.forEach(categoria => 
		{ checkBoxHTML += `	<div class="form-check ms-2">
			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"
	return checkBoxHTML;
}




// SINGLE CARD GENERATOR
// function generateCard(evento, refDate){

// 	return `<div class="mb-4 d-flex justify-content-center" onclick="viewDetails(${evento._id})">
// 	<div class="card h-100">
// 		<img src="${evento.image}" class="card-img-top" alt="${evento.name} image">
// 		<div class="card-body">
// 		<h5 class="card-title text-center">${evento.name}</h5>
// 		<div class="d-flex mb-0 justify-content-evenly">
// 			<p class="card-price d-inline mb-0"><small>${evento.date}</small></p>
// 			<p class="card-price d-inline mb-0"><strong>$${evento.price}</strong></p>
// 		</div>
// 		<hr class="mb-2 mt-2">
// 			<p class="card-text mb-2">${evento.description}</p>
// 		</div>
// 		<div class="card-footer">
// 		<btn onclick="viewDetails(${evento._id})" class=${refDate >= evento.date ? '"btn btn-outline-secondary"':'"btn btn-outline-info"'} >View Details</btn>
// 		</div>
// 	</div>
// </div>
// `
// }

function generateCard2(evento, refDate, cardClassColor){

	return `<div class="mb-4 d-flex justify-content-center" onclick="viewDetails(${evento._id})">
	<div class="card ${cardClassColor} h-100">
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
// function generateCards(events, refDate){

// 	let cardsHTML = `<div class="d-flex flex-wrap my-5 justify-content-around">`

// 	if (events.length != 0){
// 		events.forEach((event) => {
// 			cardsHTML += generateCard(event, refDate)
// 		})
// 	} else {
// 		cardsHTML += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
// 	}

// 	return cardsHTML + `</div>`
// }

function generateCards2(myObj, categoriesArray){

	let cardsHTML = `<div class="d-flex flex-wrap my-5 justify-content-around">`

	if (myObj.events.length != 0){
		myObj.events.forEach((event) => {
			let cardClass = cardStyleArray[categoriesArray.indexOf(event.category)]
			cardsHTML += generateCard2(event, myObj.currentDate, cardClass)
		})
	} else {
		cardsHTML += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
	}

	return cardsHTML + `</div>`
}


// FILTER BASED ON FILTER SECTION
// function filterContent(my_object) {
// 	// Checkboxes (only selected)
// 	let categoriesFound = [];
// 	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

// 	// Input search current value
// 	let searchWord = document.getElementById("search").value.toLowerCase();
	
// 	let filteredEvents = filterByDate(my_object.currentTarget.myParam)																				//Initially, got all events

// 	// data object filter section
// 	if ( categoriesFound.length != 0){
// 		filteredEvents = filteredEvents.filter( evento => categoriesFound.includes(evento.category))
// 	}

// 	if (searchWord != ""){
// 		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
// 	}

// 	const cards_div = document.getElementById("cartas");
// 	cards_div.innerHTML = generateCards(filteredEvents, my_object.currentTarget.myParam.currentDate);
// }

function filterContent2(my_object) {
	// Checkboxes (only selected)
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	// Input search current value
	let searchWord = document.getElementById("search").value.toLowerCase();
	let allCategoriesArray2 = [...categorySetGenerator2(my_object.currentTarget.myParam)]
	// console.log(allCategoriesArray2)


	let filteredObj = filterByDate2(my_object.currentTarget.myParam)																				//Initially, got all events
	let filteredEvents = filteredObj.events


	// data object filter section
	if ( categoriesFound.length != 0){
		filteredEvents = filteredEvents.filter( evento => categoriesFound.includes(evento.category))
	}

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
	}



	let filteredContent = {
		currentDate: my_object.currentTarget.myParam.currentDate,
		events: filteredEvents
	}
	// console.log(filteredContent)
	const cards_div = document.getElementById("cartas");
	cards_div.innerHTML = generateCards2(filteredContent, allCategoriesArray2);
}



// function filterByDate(my_object) {

// 	let currentURL = window.location.href
// 	let eventsFilteredByDate = my_object.events
// 	if( currentURL.includes("upcoming")){
// 		eventsFilteredByDate = my_object.events.filter( e => e.date >= my_object.currentDate)
// 	} else if (currentURL.includes("past")){
// 		eventsFilteredByDate = my_object.events.filter( e => e.date < my_object.currentDate)
// 	}

// 	return eventsFilteredByDate;
// }

function filterByDate2(my_object) {

	let currentURL = window.location.href
	let eventsFilteredByDate = my_object.events
	if( currentURL.includes("upcoming")){
		eventsFilteredByDate = my_object.events.filter( e => e.date >= my_object.currentDate)
	} else if (currentURL.includes("past")){
		eventsFilteredByDate = my_object.events.filter( e => e.date < my_object.currentDate)
	}

	let filteredObj = {
		currentDate: my_object.currentDate,
		events: eventsFilteredByDate
	}



	return filteredObj;
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
	let upcomingCategories = categorySetGenerator(dataObject.events.filter( e => dataObject.currentDate <= e.date));
	let pastCategories = categorySetGenerator(dataObject.events.filter( e => dataObject.currentDate > e.date));


	let upcomingEventsStats = []
	upcomingCategories.forEach( catName => upcomingEventsStats.push(generateCategoryStats(catName, dataObject.events.filter(event => dataObject.currentDate <= event.date))) )

	let pastEventsStats = []
	pastCategories.forEach( catName => pastEventsStats.push(generateCategoryStats(catName, dataObject.events.filter(event => dataObject.currentDate > event.date))) )

	// RETURNED OBJECT
	let allStats = {
		cota: mayorLenght,
		maxCap: majorCapacity,
		maxPerc: arrayMaximunAtt,
		minPerc: arrayMinimunAtt,
		upcoming: upcomingEventsStats,
		past: pastEventsStats
	}

	return allStats;

}

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











// ****************************************** NOT USED ****************************************************
// FILTER BASED ON FILTER SECTION (PROTOTYPE)
function filterContentProtorype() {
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	let searchWord = document.getElementById("search").value.toLowerCase();
	
	let filteredEvents = filterByDate()		//Initially, got all events

	if ( categoriesFound.length != 0){
		filteredEvents = filteredEvents.filter( evento => categoriesFound.includes(evento.category))
	}

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
	}

	const div_tarjetas = document.getElementById("cartas");
	div_tarjetas.innerHTML = generateCards(filteredEvents, data.currentDate);
}


// FILTER BASED ON DATE (BASED ON CURRENT URL) (PROTYPE)
function filterByDatePrototype() {
	
	let currentURL = window.location.href
	let eventsFilteredByDate = data.events
	if( currentURL.includes("upcoming")){
		eventsFilteredByDate = data.events.filter( e => e.date >= data.currentDate)
	} else if (currentURL.includes("past")){
		eventsFilteredByDate = data.events.filter( e => e.date < data.currentDate)
	}

	return eventsFilteredByDate;
}


//CARD STYLE ARRAY
let cardStyleArray = [
	"card-magenta",
	"card-blue",
	"card-green",
	"card-yellow", 
	"card-white", 
	"card-red", 
	"card-purple",
	"card-orange", 
	"card-cyan", 
	"card-brown"
]


// SIMGLE CARD GENERATOR (WITH STYLE FOR COLOURS)
function generateCard22(evento, refDate, cardCat){

	return `<div class="mb-4 d-flex justify-content-center" onclick="viewDetails(${evento._id})">
	<div class="card ${cardCat} h-100">
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


// ALL-CARDS GENERATOR FUNCTION (WITH STYLES)
function generateCards22(events, refDate){

	let categorySet = categorySetGenerator(events)


	let cardsHTML = `<div class="d-flex flex-wrap my-5 justify-content-around">`

	if (events.length != 0){
		events.forEach((event) => {
			cardCat = cardStyleArray[[...categorySet].indexOf(event.category)]
			cardsHTML += generateCard2(event, refDate, cardCat)
		})
	} else {
		cardsHTML += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
	}

	return cardsHTML + `</div>`
}