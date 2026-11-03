'use strict';
const dialog = document.querySelector('#detail');
const body = document.querySelector('#dialog-body');
const closeButton = document.querySelector('#close-dialog');
const portfolio = 'https://docs.google.com/presentation/d/15xbXmxq2czq1xOzzltYF-6ouGguGByq5/edit';
const sourceLink = `<a class="text-link" href="${portfolio}" target="_blank" rel="noopener">Исходное портфолио ↗</a>`;
const cases = {
  x5: {title: 'Кот, у тебя теперь работа.', tag: 'X5 / TELEGRAM-БОТ', role: 'Моя роль — придумала идею бота, который превращает питомцев в работников ритейла.', text: 'Люди любят показывать своих животных. Идея даёт им повод сделать это в контексте бренда: питомец становится сотрудником магазина, а результатом хочется поделиться.', result: 'В публикации канала «Давай ещё покрутим», включённой в портфолио, отмечены 1000+ комментариев с фотографиями котов и собак. Это результат командного проекта, а не личная метрика автора идеи.', image: 'x5.png', alt: 'Скрин публикации о боте X5 с упоминанием 1000+ комментариев', link: 'https://t.me/x5pets_bot', linkText: 'Посмотреть бота'},
  garden: {title: 'Бальзам. Но с сюжетом.', tag: 'LOVE GENERATION / WET DREAM GARDEN', role: 'Моя роль — работала над сценарием и прорабатывала формат спецпроекта.', text: 'Спецпроект к запуску новых бальзамов LOVE GENERATION. Работа с историей и форматом, в котором продукт становится частью контента.', result: 'В портфолио представлен реализованный материал. Охваты, продажи и бюджет проекта в исходниках не указаны.', image: 'garden.png', alt: 'Кадр спецпроекта LOVE GENERATION', link: 'https://t.me/lovegenerationbeauty/1168', linkText: 'Смотреть публикацию'},
  cycling: {title: 'Поехали за коллаборацией.', tag: 'ПЯТЁРОЧКА × ВЕЛОКЛУБ / СФЕРА X5', role: 'Моя роль — придумала идею коллаборации «Пятёрочки» с велоклубом для мероприятий «Сферы X5».', text: 'Партнёрская идея связывает ритейл, городское сообщество и офлайн-событие. В портфолио — анонс social coffee ride с ikigai cycling club.', result: 'Есть публичный анонс и ссылка на проект. Количество участников и коммерческие показатели в исходных материалах не указаны.', image: 'cycling.png', alt: 'Анонс велоколлаборации', link: 'https://t.me/sfera_x5/587', linkText: 'Смотреть анонс'},
  tiktok: {title: 'Кукуха вышла из чата.', tag: 'ТЕЛЕКОМ / TIKTOK-МАСКА', role: 'Мой вклад — креативная работа над маской. В портфолио описан путь от первоначальной идеи к реализованному вместе с клиентом варианту.', text: 'Сначала — идея маски с прыгающим гномом для поддержки услуги «Перенос тарифа». В итоге с клиентом реализовали другой вариант: маску про отлетевшую перед праздниками кукуху.', result: 'Показываю итоговый вариант, а не выдаю первоначальный концепт за запущенный проект. Метрики использования маски в исходниках не указаны.', image: 'tiktok.png', alt: 'Реализованная TikTok-маска', link: 'https://vt.tiktok.com/ZS9dBaVQfbwUm-ORC8W/', linkText: 'Открыть в TikTok'}
};
const evidence = {
 videos: `<h2>Миллион — прямо на скринах.</h2><p>Два примера личного вертикального контента. На каждом скрине из портфолио видна отметка «1 млн» просмотров.</p><div class="proof-row"><img src="assets/million-1.png" alt="Первый ролик, отметка 1 млн просмотров"><img src="assets/million-2.png" alt="Второй ролик, отметка 1 млн просмотров"></div><p class="source-note">Показатели округлены самой площадкой. Даты и подробная аналитика этих роликов в презентации не приведены.</p>${sourceLink}`,
 analytics: `<h2>Цифры без магии.</h2><p>Личный аккаунт в X: 324,9 тыс. показов, 4,5 тыс. взаимодействий, 3,5 тыс. лайков и engagement rate 1,3%. Также на скрине: 612 посещений профиля, 117 ответов, 37 репостов, 187 закладок и 39 отправок.</p><a href="assets/analytics.jpeg" target="_blank" rel="noopener"><img src="assets/analytics.jpeg" alt="Исходный скрин аналитики X со всеми показателями"></a><p class="source-note">Предоставленный скрин. На графике видны октябрьские даты; точный период и год не указаны. Проценты прироста не использую без контекста базы сравнения.</p>`,
 'post-work': `<h2>Связь с бизнес-задачами найдена.</h2><img src="assets/post-work.png" alt="Авторский мем Лизы про повышение зарплаты">${sourceLink}`,
 'post-flirt': `<h2>Текст, который узнают.</h2><img src="assets/post-flirt.png" alt="Авторский пост Лизы">${sourceLink}`
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
 if (content) openDetail(content, 'ПРУФЫ / ЛИЧНЫЙ КОНТЕНТ', button);
}));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 if (event.target !== dialog) return;
 const rect = dialog.getBoundingClientRect();
 if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());
