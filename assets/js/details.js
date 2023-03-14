let params = new URLSearchParams(document.location.search)
let id = params.get("id")

const details_container = document.getElementById("card-details")
while(details_container.firstChild) {details_container.removeChild(details_container.firstChild);} 		//Delete content (If any)

let asyncDetails = async function(){
	const response = await fetch(apiUrl);
	// const response = await fetch(localData);													//Discomment this line and comment the previous one if data is not being shown
	const dataRetr = await response.json().then( apiEvents => {

		let filteredEvent = apiEvents.events.filter(info => info._id == id)
		eventDetails = filteredEvent[0]
		

		
		// EVENTS COULD HAVE ASSISTANCE OR ESTIMATE PROPERTY
		let assintanceOrEstimated = eventDetails.hasOwnProperty("assistance") ? "Estimated: ".concat(`${eventDetails.assistance}`):"Assistance: ".concat(`${eventDetails.estimate}`);
		
		// CONTENT TEMPLATE STRING
		let detailsContent = `
		<div class="card-details-all p-3">
		<div class="d-flex g-0">
			<div class="col-6 card-left d-flex flex-column align-items-center justify-content-center">
				<img
					src="${eventDetails.image}}"
					alt="${eventDetails.name}"
					class="img-fluid details-image">
				<h4 class="card-category mt-2 text-center text-decoration-underline">${eventDetails.category}</h4>
			</div>
			<div class="col-6 card-right">
				<div class="card-details-body">
					<div class="pt-3 px-2 px-md-3 d-md-flex justify-content-md-between">
						<h3 class="card-title">${eventDetails.name}</h3>
						<h3 class="pe-5 italic">$${eventDetails.price}</h3>
					</div>
					<p class="card-text mb-0 ms-2 ms-md-4">
						<small class="text-muted">Date: ${eventDetails.date}</small>
					</p>
					<p class="card-text mb-2 ms-2 ms-md-4">
						<small class="text-muted">Place: ${eventDetails.place}</small>
					</p>
					<div class="description">
						<p class="card-text mt-1 mt-md-4 px-2 px-md-3">	${eventDetails.description}</p>
					</div>
		
					<p class="card-text mt-1 mt-md-2 mb-0 ms-2 ms-md-4">
						Capacity: ${eventDetails.capacity}
					</p>
					<p class="card-text mb-2 ms-2 ms-md-4">
						${assintanceOrEstimated}
					</p>
				</div>
			</div>
		</div>
		</div>`
		
		details_container.innerHTML = detailsContent



	})
}

asyncDetails();		

