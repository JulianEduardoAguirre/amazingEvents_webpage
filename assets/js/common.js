let isPast = (fecha1, fecha2) => {
	let html_boton = '<a href="./details.html" class="btn btn-outline-secondary">View Details</a>'
	if (fecha1 < fecha2){
		html_boton = '<a href="./details.html" class="btn btn-outline-info">View Details</a>'
	}

	return html_boton;
}