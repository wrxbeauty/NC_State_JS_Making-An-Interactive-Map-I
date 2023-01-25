// // map object
// const myMap = {
// 	coordinates: [],
// 	businesses: [],
// 	map: {},
// 	markers: {},

// 	// build map
// 	buildMap() {
// 		this.map = L.map('map', {
// 		center: this.coordinates,
// 		zoom: 11,
// 		});

// 		// add openstreetmap tiles
// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 		attribution:
// 			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 		minZoom: '15',
// 		}).addTo(this.map)

// 		// create and add geolocation marker
// 		const marker = L.marker(this.coordinates)
// 		marker
// 		.addTo(this.map)
// 		.bindPopup('<p1><b>You are here</b><br></p1>')
// 		.openPopup()
// 	},

//     // add business markers
// 	businessMarkers(data) {
//         // console.log(this.businesses)
// 		for (var i = 0; i < data.length; i++) {
// 		this.markers = L.marker([
// 			data[i].lat,
// 			data[i].lon,
// 		])
// 			.bindPopup(`<p1>${data[i].name}</p1>`)
// 			.addTo(this.map)
// 		}
// 	},
// }

// // get businesses
// async function getFourSquare() {
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'fsq3yJ7RhgxWOM6iYW3ixxSSknI1y9Fr4OssA2pNuxxqmy4='
//         }
//       };
//       let limit = 5
//       let lat = myMap.coordinates[0]
//       let lon = myMap.coordinates[1]
//       console.log(lat,lon)
//       const business = document.getElementById('options').value
//       let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}&radius=100000`, options)
//       const data = await response.json()
// 	  console.log(data)

// 	  const processed = processBusiness(data.results)
// 	  myMap.businessMarkers(processed)
// }

// // process array
// function processBusiness(data) {
//     const processedBusinesses = data.map((element) => {
//         let location = {
//             name: element.name,
//             lat: element.geocodes.main.latitude,
//             lon: element.geocodes.main.longitude
//         };
//         return location
//     })
// 	console.log(processedBusinesses)
// 	return processedBusinesses
// }

// // event handlers
// // window load
// window.onload = async () => {
// 	const coords = await getCoords()
// 	console.log(coords)
// 	myMap.coordinates = coords
// 	myMap.buildMap()
// }

// document.getElementById('submit').addEventListener('click', function() {
//     getFourSquare()
// })