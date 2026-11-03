'use strict';
const dialog = document.querySelector('#detail');
const body = document.querySelector('#dialog-body');
const closeButton = document.querySelector('#close-dialog');
const portfolio = 'https://docs.google.com/presentation/d/15xbXmxq2czq1xOzzltYF-6ouGguGByq5/edit';
const sourceLink = `<a class="text-link" href="${portfolio}" target="_blank" rel="noopener">Исходное портфолио ↗</a>`;
const cases = {
  x5: {title: 'Бот, который устраивает котов на работу', tag: 'X5 / TELEGRAM-БОТ', role: 'Я придумала идею бота для X5, который превращает домашних животных в сотрудников магазинов.', text: 'В бота можно загрузить фотографию питомца и получить его изображение в форме сотрудника магазина. Так у владельцев появляется повод поделиться фотографией своего животного и поучаствовать в активности бренда.', result: 'В публикации канала «Давай ещё покрутим», включённой в портфолио, отмечены 1000+ комментариев с фотографиями котов и собак. Над проектом работала команда; я отвечала за идею бота.', image: 'x5.png', alt: 'Скрин публикации о боте X5 с упоминанием 1000+ комментариев', link: 'https://t.me/x5pets_bot', linkText: 'Посмотреть бота'},
  garden: {title: 'Запуск бальзамов LOVE GENERATION', tag: 'LOVE GENERATION / WET DREAM GARDEN', role: 'Для спецпроекта Wet Dream Garden я работала над сценарием и прорабатывала формат.', text: 'Wet Dream Garden приурочили к запуску новых бальзамов LOVE GENERATION. Ниже можно посмотреть кадр из ролика и перейти к публикации бренда.', result: 'В портфолио представлен реализованный ролик; данные об охватах и продажах не опубликованы.', image: 'garden.png', alt: 'Кадр спецпроекта LOVE GENERATION', link: 'https://t.me/lovegenerationbeauty/1168', linkText: 'Смотреть публикацию'},
  cycling: {title: 'Велозаезд вместе с «Пятёрочкой»', tag: 'ПЯТЁРОЧКА × ВЕЛОКЛУБ / СФЕРА X5', role: 'Я придумала идею коллаборации «Пятёрочки» с велоклубом для мероприятий «Сферы X5».', text: 'В анонсе коллаборации с ikigai cycling club предложен social coffee ride с маршрутом от «Пятёрочки» на Полянке до «Сферы X5». В портфолио сохранился этот анонс.', result: 'По ссылке можно посмотреть анонс проекта. Данные о количестве участников в портфолио не приведены.', image: 'cycling.png', alt: 'Анонс велоколлаборации', link: 'https://t.me/sfera_x5/587', linkText: 'Смотреть анонс'},
  tiktok: {title: 'TikTok-маска про предпраздничную суету', tag: 'ТЕЛЕКОМ / TIKTOK-МАСКА', role: 'Я придумывала идеи TikTok-маски для телеком-бренда и участвовала в работе над итоговым вариантом вместе с клиентом.', text: 'Первую идею с прыгающим гномом я предложила для поддержки услуги «Перенос тарифа». Вместе с клиентом мы выбрали и реализовали другой вариант — маску про отлетевшую перед праздниками кукуху.', result: 'На скрине показана реализованная маска, которую можно открыть в TikTok. Данные об использовании в портфолио не приведены.', image: 'tiktok.png', alt: 'Реализованная TikTok-маска', link: 'https://vt.tiktok.com/ZS9dBaVQfbwUm-ORC8W/', linkText: 'Открыть в TikTok'}
};
const evidence = {
 videos: `<h2>Два ролика с миллионом просмотров</h2><p>Это два моих ролика, на каждом из которых площадка показывает «1 млн» просмотров.</p><div class="proof-row"><img src="assets/million-1.png" alt="Первый ролик, отметка 1 млн просмотров"><img src="assets/million-2.png" alt="Второй ролик, отметка 1 млн просмотров"></div><p class="source-note">Показатели округлены самой площадкой. Даты и подробная аналитика этих роликов в презентации не приведены.</p>${sourceLink}`,
 analytics: `<h2>Статистика моего аккаунта в X</h2><p>Личный аккаунт в X: 324,9 тыс. показов, 4,5 тыс. взаимодействий, 3,5 тыс. лайков и engagement rate 1,3%. Также на скрине: 612 посещений профиля, 117 ответов, 37 репостов, 187 закладок и 39 отправок.</p><a href="assets/analytics.jpeg" target="_blank" rel="noopener"><img src="assets/analytics.jpeg" alt="Исходный скрин аналитики X со всеми показателями"></a><p class="source-note">На графике видны октябрьские даты, но точный период и год на скриншоте не указаны.</p>`,
 'post-work': `<h2>Мой пост про повышение зарплаты</h2><img src="assets/post-work.png" alt="Авторский мем Лизы про повышение зарплаты">${sourceLink}`,
 'post-flirt': `<h2>Ещё один пост из моего блога</h2><img src="assets/post-flirt.png" alt="Авторский пост Лизы">${sourceLink}`
};
let opener;
function openDetail(html, label, trigger) {
 opener = trigger;
 body.innerHTML = html;
 document.querySelector('#dialog-label').textContent = label;
 dialog.showModal();
 dialog.scrollTop = 0;
 closeButton.focus();
}
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
 const item = cases[button.dataset.case];
 if (!item) return;
 openDetail(`<h2>${item.title}</h2><p class="role">${item.role}</p><p>${item.text}</p><img src="assets/${item.image}" alt="${item.alt}"><p>${item.result}</p><a class="button dark" href="${item.link}" target="_blank" rel="noopener">${item.linkText} ↗</a><p class="source-note">${sourceLink}</p>`, item.tag, button);
}));
document.querySelectorAll('[data-evidence]').forEach(button => button.addEventListener('click', () => {
 const content = evidence[button.dataset.evidence];
 if (content) openDetail(content, 'ЛИЧНЫЙ БЛОГ / СКРИНШОТЫ', button);
}));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 if (event.target !== dialog) return;
 const rect = dialog.getBoundingClientRect();
 if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());
