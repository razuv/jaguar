'use strict';
const dialog = document.querySelector('#detail');
const body = document.querySelector('#dialog-body');
const closeButton = document.querySelector('#close-dialog');
const portfolio = 'https://docs.google.com/presentation/d/15xbXmxq2czq1xOzzltYF-6ouGguGByq5/edit';
const sourceLink = `<a class="text-link" href="${portfolio}" target="_blank" rel="noopener">Исходное портфолио <svg class="icon" aria-hidden="true"><use href="#hi-arrow-up-right-01"></use></svg></a>`;
const cases = {
  x5: {title: 'Бот, который устраивает котов на работу', tag: 'X5 / TELEGRAM-БОТ', role: 'Я придумала идею бота для X5, который превращает домашних животных в сотрудников магазинов.', text: 'В бота можно загрузить фотографию питомца и получить его изображение в форме сотрудника магазина. Так у владельцев появляется повод поделиться фотографией своего животного и поучаствовать в активности бренда.', result: 'В публикации канала «Давай ещё покрутим», включённой в портфолио, отмечены 1000+ комментариев с фотографиями котов и собак. Над проектом работала команда; я отвечала за идею бота.', link: 'https://t.me/x5pets_bot', linkText: 'Посмотреть бота'},
  garden: {title: 'Запуск бальзамов LOVE GENERATION', tag: 'LOVE GENERATION / WET DREAM GARDEN', role: 'Для спецпроекта Wet Dream Garden я работала над сценарием и прорабатывала формат.', text: 'Wet Dream Garden приурочили к запуску новых бальзамов LOVE GENERATION. По ссылке можно посмотреть публикацию бренда с итоговым роликом.', result: 'В портфолио представлен реализованный ролик; данные об охватах и продажах не опубликованы.', link: 'https://t.me/lovegenerationbeauty/1168', linkText: 'Смотреть публикацию'},
  cycling: {title: 'Велозаезд вместе с «Пятёрочкой»', tag: 'ПЯТЁРОЧКА × ВЕЛОКЛУБ / СФЕРА X5', role: 'Я придумала идею коллаборации «Пятёрочки» с велоклубом для мероприятий «Сферы X5».', text: 'В анонсе коллаборации с ikigai cycling club предложен social coffee ride с маршрутом от «Пятёрочки» на Полянке до «Сферы X5». В портфолио сохранился этот анонс.', result: 'По ссылке можно посмотреть анонс проекта. Данные о количестве участников в портфолио не приведены.', link: 'https://t.me/sfera_x5/587', linkText: 'Смотреть анонс'},
  tiktok: {title: 'TikTok-маска про предпраздничную суету', tag: 'ТЕЛЕКОМ / TIKTOK-МАСКА', role: 'Я придумывала идеи TikTok-маски для телеком-бренда и участвовала в работе над итоговым вариантом вместе с клиентом.', text: 'Первую идею с прыгающим гномом я предложила для поддержки услуги «Перенос тарифа». Вместе с клиентом мы выбрали и реализовали другой вариант — маску про отлетевшую перед праздниками кукуху.', result: 'Реализованную маску можно открыть в TikTok по ссылке. Данные об использовании в портфолио не приведены.', link: 'https://vt.tiktok.com/ZS9dBaVQfbwUm-ORC8W/', linkText: 'Открыть в TikTok'}
};
const metrics = [['324,9К', 'показов'], ['4,5К', 'взаимодействий'], ['1,3%', 'вовлечённость'], ['3,5К', 'лайков'], ['612', 'посещений профиля'], ['117', 'ответов'], ['37', 'репостов'], ['187', 'закладок'], ['39', 'отправок']];
const evidence = {
 analytics: `<h2>Результаты моего аккаунта в X</h2><div class="analytics-grid">${metrics.map(([value, label]) => `<div class="analytics-item"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div><p class="source-note">Показатели взяты из предоставленной аналитики X. На графике видны октябрьские даты, но точный период и год не указаны.</p><h2>Два ролика с миллионом просмотров</h2><p>На каждом из двух роликов в портфолио площадка показывает «1 млн» просмотров. Это округлённые показатели, которые относятся к отдельным публикациям.</p>${sourceLink}`
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
 openDetail(`<h2>${item.title}</h2>${button.dataset.case === "x5" ? '<div class="detail-metric">1000+</div><p>комментариев с фотографиями питомцев</p>' : ""}<p class="role">${item.role}</p><p>${item.text}</p><p>${item.result}</p><a class="button dark" href="${item.link}" target="_blank" rel="noopener">${item.linkText} <svg class="icon" aria-hidden="true"><use href="#hi-arrow-up-right-01"></use></svg></a><p class="source-note">${sourceLink}</p>`, item.tag, button);
}));
document.querySelectorAll('[data-evidence]').forEach(button => button.addEventListener('click', () => {
 const content = evidence[button.dataset.evidence];
 if (content) openDetail(content, 'ЛИЧНЫЙ БЛОГ / РЕЗУЛЬТАТЫ', button);
}));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 if (event.target !== dialog) return;
 const rect = dialog.getBoundingClientRect();
 if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());
