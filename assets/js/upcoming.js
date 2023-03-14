let asyncIndex = async function(){
	const response = await fetch(apiUrl);
	// const response = await fetch(localData);													//Discomment this line and comment the previous one if data is not being shown
	const dataRetr = await response.json().then( apiEvents => {


		// *************** FIRST RENDERING SECTION *************** 
		// 									 global declarations

		// CARDS SECTION
		const div_tarjetas = document.getElementById("cartas");
		while(div_tarjetas.firstChild) {div_tarjetas.removeChild(div_tarjetas.firstChild);}	  			//Delete previous content (if exists)

		div_tarjetas.innerHTML = generateCards(filterByDate(apiEvents), apiEvents.currentDate);			//First time rendering cards (using all data)

		// CHECKBOXES
		const div_checkboxes = document.getElementById("checkboxes")
		while(div_checkboxes.firstChild) { div_checkboxes.removeChild(div_checkboxes.firstChild);}	//Delete previous content (if exists)

		div_checkboxes.innerHTML = checkBoxGenerator(filterByDate(apiEvents));											//First (and unique) time rendering checkboxes


	// *************** ADDING EVENT LISTENERS FOR FILTER SECTION *************** 

		const inputSearch = document.getElementById("search")
		inputSearch.addEventListener("input", filterContent)
		inputSearch.myParam = apiEvents;

		const otrosCheckboxes = document.querySelectorAll(".form-check-input")
		for (const checkbox of otrosCheckboxes) {
			checkbox.addEventListener("click", filterContent);
			checkbox.myParam = apiEvents;
		}		
	})
}

asyncIndex();


