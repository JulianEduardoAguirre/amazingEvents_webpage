let params = new URLSearchParams(document.location.search)
let id = params.get("id")

// console.log(id)

let evento = data.events.filter(info => info._id == id)
eventoSolo = evento[0]
// console.log(evento)

const details_container = document.getElementById("card-details")
// console.log(details_container)

//Si tiene contenido, lo elimino primero
while(details_container.firstChild) {
					details_container.removeChild(details_container.firstChild);
			}

// let assintanceOrEstimated = data.currentDate <= eventoSolo.date ? "Assistance: ".concat(`${eventoSolo.assistance}`):"Estimated: ".concat(`${eventoSolo.estimate}`);
// let assintanceOrEstimated = data.currentDate <= eventoSolo.date ? "Estimated: ".concat(`${eventoSolo.estimate}`):"Assistance: ".concat(`${eventoSolo.assistance}`);
let assintanceOrEstimated = eventoSolo.hasOwnProperty("assistance") ? "Estimated: ".concat(`${eventoSolo.assistance}`):"Assistance: ".concat(`${eventoSolo.estimate}`);
// console.log(assintanceOrEstimated)

let detailsContent = `
<div class="card-details-all p-3">
<div class="row g-0">
	<div class="col-6 card-left d-flex flex-column align-items-center justify-content-center">
		<img
			src="${eventoSolo.image}}"
			alt="${eventoSolo.name}"
			class="img-fluid">
		<h4 class="card-category mt-2 text-center">${eventoSolo.category}</h4>
	</div>
	<div class="col-6 card-right">
		<div class="card-details-body">
			<div class="pt-3 px-2 px-md-3 d-md-flex justify-content-md-between">
				<h3 class="card-title">${eventoSolo.name}</h3>
				<h3 class="pe-5 italic">$${eventoSolo.price}</h3>
			</div>
			<p class="card-text mb-0 ms-2 ms-md-4">
				<small class="text-muted">Date: ${eventoSolo.date}</small>
			</p>
			<p class="card-text mb-2 ms-2 ms-md-4">
				<small class="text-muted">Place: ${eventoSolo.place}</small>
			</p>
			<div class="description">
				<p class="card-text mt-1 mt-md-4 px-2 px-md-3">	${eventoSolo.description}</p>
			</div>

			<p class="card-text mt-1 mt-md-2 mb-0 ms-2 ms-md-4">
				Capacity: ${eventoSolo.capacity}
			</p>
			<p class="card-text mb-2 ms-2 ms-md-4">
				${assintanceOrEstimated}
			</p>
		</div>
	</div>
</div>
</div>`

details_container.innerHTML = detailsContent