// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


const welcomePageElement = document.querySelector('.welcome-page');
//const videoPage = document.querySelector('.video-page');

function toggleWelcomePage() {
	welcomePageElement.classList.toggle('hide');
	console.log("My toggle function");
	console.log(welcomePageElement);
}

welcomePageElement.addEventListener('click', function () {
	toggleWelcomePage();
});

//call the function to hide
welcomePage();

//call the function to show
welcomePage();

//const player = new Vimeo.Player(iframe);

player.on('play', function () {
	console.log('Played the video');
});

//player.getVideoTitle().then(function (title) {
console.log('title:', title);
//});

const videos = [
	{ id: "1074050648", title: "Cat1" },
	{ id: "1075130900", title: "Cat2" },
	{ id: "1075131880", title: "Cat3" },
	{ id: "1075132111", title: "Cat4" },
	{ id: "1075132286", title: "Cat5" },
	{ id: "1075132453", title: "Cat6" },
	{ id: "1075132534", title: "Cat7" },
	{ id: "1075132620", title: "Cat8" },
	{ id: "1075132670", title: "Cat9" },
	{ id: "1075132750", title: "Cat10" },
	{ id: "1075132923", title: "Cat11" },
	{ id: "1075133071", title: "Cat12" },
	{ id: "1075133215", title: "Cat13" },
	{ id: "1075133361", title: "Cat14" },
	{ id: "1075133438", title: "Cat15" }
]

let lastPlayedIndex = -1;

function loadRandomVideo() {
	let randomIndex;
}

const iframe = document.querySelector('.video-container');
container.innerHTML = '';
container.appendChild(iframe);

window.addEventListener('DOMContentLoaded', loadRandomVideo);
