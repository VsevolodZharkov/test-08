import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const STOREGY_KEY = 'videoplayer-current-time';
// let sec;

const player = new Player(iframe);
console.log(player);
player.on('timeupdate', throttle(videoOn, 1000))
function videoOn(e) {
	const { seconds } = e;
	JSON.stringify(localStorage.setItem(STOREGY_KEY, seconds));
}

const a = JSON.parse(localStorage.getItem(STOREGY_KEY));
console.log(a);
if(a) {
	player.setCurrentTime(a);
}


















// const iframe = document.querySelector('iframe');

// const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(onTime, 1000)
// );
// function onTime (event) {
// 	const { seconds } = event;
// 	console.log(seconds);
// 	localStorage.setItem('videoplayer-current-time', seconds);
// }
// const theme = localStorage.getItem('videoplayer-current-time');
// if (theme) {
// 	player.setCurrentTime(theme);
// }
