
// 1 Імпортуємо vimeo player з пакета
import Player from '@vimeo/player';
//  2 Инициализируй плеер в файле скрипта (треба вказати айдішник з HTML)
const player = new Player('vimeo-player');

// Пробуємо чи працює
// player.on('play', function() {
//     console.log('played the video!');
// });

// метод on() 
// відстежуємо подію timeupdate обновлення часу запуску відео


const callback = function(data) {
    // console.log(data);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

player.on('timeupdate', callback);

const time = JSON.parse(localStorage.getItem("videoplayer-current-time"))
console.log (time.seconds )

player.setCurrentTime(time.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});