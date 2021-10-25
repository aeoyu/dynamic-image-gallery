const architectureBuilding = [
	{
		id: "1",
		title: "Wall",
		description: "Orange wall against pink background",
		width: "725",
		height: "974",
		pathURL: "dim-gunger.jpg",
		linkURL: "https://unsplash.com/photos/CenRLLNjLj0",
		credit: "Dim Gunger",
		creditURL: "https://unsplash.com/@gundim",
	},
	{
		id: "2",
		title: "Bodrum, Bodrum, Turkey",
		description: "Beige squares",
		width: "725",
		height: "974",
		pathURL: "emrah-kara.jpg",
		linkURL: "https://unsplash.com/photos/75rVw_1losM",
		credit: "Emrah Kara",
		creditURL: "https://unsplash.com/@emrahkara",
	},
	{
		id: "3",
		title: "Orange building",
		description: "Building against Orange Sunset",
		width: "725",
		height: "974",
		pathURL: "emrah-kara1.jpg",
		linkURL: "https://unsplash.com/photos/WbtzLqSt52s",
		credit: "Emrah Kara",
		creditURL: "https://unsplash.com/@emrahkara/",
	},
	{
		id: "4",
		title: "Stairs",
		description: "White Stairs Case",
		width: "725",
		height: "974",
		pathURL: "kaleb-tapp.jpg",
		linkURL: "https://unsplash.com/photos/-xr7uKVY8QM/",
		credit: "Kaleb Tapp",
		creditURL: "https://unsplash.com/@kalebtapp/",
	},
	{
		id: "5",
		title: "Berlin, Deutschland",
		description: "Building and Balcony",
		width: "725",
		height: "974",
		pathURL: "marcus-lenk.jpg",
		linkURL: "https://unsplash.com/photos/RXKWTpqYQnE/",
		credit: "Marcus Lenk",
		creditURL: "https://unsplash.com/@marcuslenk",
	},
	{
		id: "6",
		title: "Tehran, Tehran, Iran",
		description: "Windows on Obtuse Angle",
		width: "725",
		height: "974",
		pathURL: "nastaran-taghipour.jpg",
		linkURL: "https://unsplash.com/photos/b5BoZovknU4/",
		credit: "Nastaran Taghipour",
		creditURL: "https://unsplash.com/@niiaann/",
	},
	{
		id: "7",
		title: "Burj Al Arab",
		description: "Interior of Burj Al Arab",
		width: "725",
		height: "974",
		pathURL: "neil-robespierre.jpg",
		linkURL: "https://unsplash.com/photos/CgIyn3pKLvM",
		credit: "Neil Robespierre",
		creditURL: "https://unsplash.com/@neilrobespierre",
	},
	{
		id: "8",
		title: "Milano, MI, Italia",
		description: "Curve building with alot of windows",
		width: "725",
		height: "974",
		pathURL: "paolo-gregotti.jpg",
		linkURL: "https://unsplash.com/photos/dOTMrZVB2PM",
		credit: "Paolo Gregotti",
		creditURL: "https://unsplash.com/@paolo_gregotti",
	},
	{
		id: "9",
		title: "Tokyo, Japan",
		description: "Vertical lines on a building",
		width: "725",
		height: "974",
		pathURL: "roman-davydko.jpg",
		linkURL: "https://unsplash.com/photos/gvPvj3jg9Gw",
		credit: "Roman Davydko",
		creditURL: "https://unsplash.com/@jdavydko",
	},
	{
		id: "10",
		title: "Calgary",
		description: "Orange and Blue windows on a Building",
		width: "725",
		height: "974",
		pathURL: "ryunosuke-kikuno.jpg",
		linkURL: "https://unsplash.com/photos/fhuzzPbe50E",
		credit: "Ryunosuke Kikuno",
		creditURL: "https://unsplash.com/@ryunosuke_kikuno",
	},
	{
		id: "11",
		title: "Oslo, Norvege",
		description: "Wood curved wall",
		width: "725",
		height: "974",
		pathURL: "samuel-daniel.jpg",
		linkURL: "https://unsplash.com/photos/h0J6-3m3Uk0/",
		credit: "Samuel Daniel",
		creditURL: "https://unsplash.com/@samda",
	},

	{
		id: "12",
		title: "Staircase",
		description: "Many levels of staircase",
		width: "725",
		height: "974",
		pathURL: "simon-lee.jpg",
		linkURL: "https://unsplash.com/photos/EbwaiwOqoCI",
		credit: "Simon Lee",
		creditURL: "https://unsplash.com/@simonppt",
	},
];

let output = " ";
architectureBuilding.forEach(function (imageId) {
	output += `

  <figure>
	
  <a href= "${imageId.linkURL}">
  <img src="assets/images/${imageId.pathURL}"  
	alt= "${imageId.title}" 
	width="${imageId.width}" 
	height= "${imageId.height}">
  </a>

  <figcaption> ${imageId.title}</figcaption>

        <a class="author" href="${imageId.creditURL}">
          <div>${imageId.credit}</div>
        </a>

  </figure>`;
});

const photo = document.querySelector(".container");
photo.innerHTML = output;
