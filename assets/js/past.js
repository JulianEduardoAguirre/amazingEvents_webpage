
//																															FIRST RENDERING SECTION
// 																																global declarations

// CARDS SECTION
const div_tarjetas = document.getElementById("cartas");
while(div_tarjetas.firstChild) {div_tarjetas.removeChild(div_tarjetas.firstChild);}	  			//Delete previous content (if exists)

div_tarjetas.innerHTML = generar_tarjetas2(filterByDate(), data.currentDate);								//First time rendering cards (using all data)


// FILTER SECTION (CHECKBOXES & INPUT)

// CHECKBOX CONTAINER
const div_checkboxes = document.getElementById("checkboxes")
while(div_checkboxes.firstChild) { div_checkboxes.removeChild(div_checkboxes.firstChild);}	//Delete previous content (if exists)

div_checkboxes.innerHTML = checkBoxGenerator(filterByDate());																//First (and unique) time rendering checkboxes



//																												ADDING EVENT LISTENERS FOR FILTER SECTION

const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", filterContent)

const otrosCheckboxes = document.querySelectorAll(".form-check-input")
for (const checkbox of otrosCheckboxes) {
	checkbox.addEventListener("click", filterContent)
}

