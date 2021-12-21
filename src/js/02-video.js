// 1 Імпортуємо vimeo player з пакета
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//  2 Инициализируй плеер в файле скрипта (треба вказати айдішник з HTML)
const player = new Player('vimeo-player');
// Перевірити чи працює:
// player.on('play', function() {
//     console.log('played the video!');
// });

// 3 Метод on() 
// відстежуємо подію timeupdate обновлення часу запуску відео
player.on('timeupdate',throttle(onTimeUpdate, 1000) );

function onTimeUpdate (data) {
    console.log(data);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
}
// Забираємо в перемінну time значення з локального збереження
// (це буде час з якого буде відновлюватись сеанс)
const time = JSON.parse(localStorage.getItem("videoplayer-current-time"))

// метод для відновлення відтворення відео із збереженої позиції
player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
// КОМЕНТАР краще зберігати такі дані в sessionStorage 
// бо при відкритті нової вкладки чи закритті браузера дані 
// автоматично будуть зникати і їх не потрібно видаляти