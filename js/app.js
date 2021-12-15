let openMap = () => {
	window.open("map.html","Ratting", "width=480,height=260,left=150,top=200,toolbar=0,status=0,");
}

let openMenu = () => {
	window.open("https://www.tripadvisor.es/Restaurant_Review-g661469-d19567203-Reviews-Restaurante_Pizzeria_D_Landucci-Elche_Costa_Blanca_Province_of_Alicante_Valencia.html","Ratting", "width=1280,height=720,left=150,top=200,toolbar=0,status=0,");
}

const telephone = "¡Llama al 622221222!"
const telQuestion = "¿Cómo contactarnos?"

let revealNumber = () => {
	const text = document.getElementById("telephone").innerHTML

	if (text == telephone) {
		document.getElementById("telephone").innerHTML = telQuestion
	} else {
		document.getElementById("telephone").innerHTML = telephone
	}
}

const openTimes = "Jue - Dom 1pm - 11pm"
const openQuestion = "¿Cuándo abrimos?"

let revealOpenTimes = () => {
	const text = document.getElementById("open").innerHTML

	if (text == openTimes) {
		document.getElementById("open").innerHTML = openQuestion
	} else {
		document.getElementById("open").innerHTML = openTimes
	}
}
