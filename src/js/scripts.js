// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


const welcomePageElement = document.querySelector('.welcome-page');
const videoPageElement = document.querySelector('.video-page');
const videoContainer = document.querySelector('.video-container');

function switchPages() {
	welcomePageElement.style.opacity = '0';
	setTimeout(function () {
		welcomePageElement.style.display = 'none';
		videoPageElement.style.display = 'block';
	}, 500);

	console.log('Welcome page hidden, video page shown');
}

welcomePageElement.addEventListener('click', switchPages);

const iframe = document.querySelector('.video-container iframe');

const videoIds = [
	'1074050648',
	'1075130900',
	'1075131880',
	'1075132111',
	'1075132286',
	'1075132453',
	'1075132534',
	'1075132620',
	'1075132670',
	'1075132750',
	'1075132923',
	'1075133071',
	'1075133215',
	'1075133361',
	'1075133438'
];

let currentVideoIndex = 0;

const player = new Vimeo.Player(iframe);

player.on('play', function () {
	console.log('Played the video');
});

player.getVideoTitle().then(function (title) {
	console.log('title:', title);
});

player.on('ended', function () {
	currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;

	loadVideo(videoIds[currentVideoIndex]);
})

function loadVideo(videoId) {
	player.loadVideo(videoId).then(function () {
		player.play();
	}).catch(function (error) {
		console.error('Error loading video:', error);
	});
}

//up & down bottons
const upButton = document.querySelector('.control-buttons img[alt="up"]');
const downButton = document.querySelector('.control-buttons img[alt="down"]');
const shareButton = document.querySelector('.control-buttons img[alt="share"]');

upButton.addEventListener('click', function () {
	currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
	loadVideo(videoIds[currentVideoIndex]);
	console.log('Playing previous video, index:', currentVideoIndex);
});

downButton.addEventListener('click', function () {
	currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
	loadVideo(videoIds[currentVideoIndex]);
	console.log('Playing next video, index:', currentVideoIndex);
});

//sound buttons
const backgroundMusic = document.getElementById('backgroundMusic');
const soundButton = document.querySelector('.control-buttons img[alt="sound"]');

let isMusicPlaying = false;

document.addEventListener('DOMContentLoaded', function () {
	soundButton.src = 'images/button no sound.png';
})

soundButton.addEventListener('click', function () {
	if (isMusicPlaying) {
		backgroundMusic.pause();
		isMusicPlaying = false;
		soundButton.src = 'images/button no sound.png';
	} else {
		backgroundMusic.play()
			.then(() => {
				isMusicPlaying = true;
				soundButton.src = 'images/button sound on.png';
			})
			.catch(error => {
				console.error('Error playing background music:', error);
			});
	}
});

//about button
const aboutButton = document.querySelector('.about-button');
const aboutSection = document.querySelector('.about-page');
const backButton = document.querySelector('.back-button');

document.addEventListener('DOMContentLoaded', function () {
	aboutSection.style.display = 'none';
});

aboutButton.addEventListener('click', function () {
	aboutSection.style.display = 'block';
});

backButton.addEventListener('click', function () {
	aboutSection.style.display = 'none';
});

//mascot talking & sleep
const bb2Image = document.querySelector('section img.mascot[src="images/BB2.png"]');
const bb2Section = bb2Image.parentElement;
const catSpeakingSection = document.querySelector('.cat-speaking');
const sleepButton = document.querySelector('.sleep-button');

document.addEventListener('DOMContentLoaded', function () {
	catSpeakingSection.style.display = 'none';

	bb2Section.style.display = 'block';

	bb2Image.addEventListener('click', function () {
		bb2Section.style.display = 'none';
		catSpeakingSection.style.display = 'block';
	});
});

sleepButton.addEventListener('click', function () {
	catSpeakingSection.style.display = 'none';
	bb2Section.style.display = 'block';
});


//let lastPlayedIndex = -1;

//function loadRandomVideo() {let randomIndex;}

//container.innerHTML = '';
//container.appendChild(iframe);

//window.addEventListener('DOMContentLoaded', loadRandomVideo);
