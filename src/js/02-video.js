/*
HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

 1. Ознайомся з документацією бібліотеки Vimeo плеєра.
 2. Додай бібліотеку як залежність проекту через npm.
 3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
 4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
 5. Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
 6. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
 7. Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
*/

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const throttledPlayPrint = throttle(function (event) {
  //console.log('Time, sec: ' + ev.seconds);
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000);

player.on('timeupdate', throttledPlayPrint);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
