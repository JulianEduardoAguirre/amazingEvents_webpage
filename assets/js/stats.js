let datos = generateStats();
// console.log("DATOS")
// console.log(datos)


const tableGeneralStats = document.getElementById("table-event-statistics")
const tableUpcoming = document.getElementById("table-upcoming")
const tablePast = document.getElementById("table-past")

var tBodyGeneral = tableGeneralStats.getElementsByTagName('tbody')[0];
var tBodyUpcoming = tableUpcoming.getElementsByTagName('tbody')[0];
var tBodyPast = tablePast.getElementsByTagName('tbody')[0];


// GENERAL EVENTS STATS
let tableEventStatsString = `<tr>
<td class="italic">Events with the highest percentage of attendance</td>
<td class="italic">Events with the lowest percentage of attendance</td>
<td class="italic">Event with larger capacity</td>
</tr>
`

tableEventStatsString += `<tr>
<td>${datos.maxCap}</td>
<td>${datos.maxPerc}</td>
<td>${datos.minPerc}</td>
</tr>
`

tBodyGeneral.innerHTML = tableEventStatsString

// UPCOMING STATS

let tableUpcomingString = `					<tr>
<td class="italic">Categories</td>
<td class="italic">Revenues</td>
<td class="italic">Percentage of attendance</td>
</tr>`

datos.upcoming.forEach( element => tableUpcomingString += `
<tr>
	<td>${element.category}</td>
	<td>${element.revenue}</td>
	<td>${element.attendanceTotal / element.capacityTotal}</td>
</tr>
`)

tBodyUpcoming.innerHTML = tableUpcomingString

// PAST STATS

let tablePastString = `					<tr>
<td class="italic">Categories</td>
<td class="italic">Revenues</td>
<td class="italic">Percentage of attendance</td>
</tr>`

datos.past.forEach( element => tablePastString += `
<tr>
	<td>${element.category}</td>
	<td>${element.revenue}</td>
	<td>${element.attendanceTotal / element.capacityTotal}</td>
</tr>
`)

tBodyPast.innerHTML = tablePastString
