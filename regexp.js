// Задача 1
const files = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const newFiles = files.filter(elem => /\.(js|jsx|ts)$/i.test(elem));

console.log('newFiles: ', newFiles);

// Задача 2
const emails = `info@methed.ru, max24@mail.com, java_script@google.io,
  my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz`;

const regexp = /[\w-]+@[a-z]{3,}\.[a-z]{2,5}/g;

const valid = emails.match(regexp);

valid.forEach((el, i) => {
  if (el.search('-') !== -1) valid.splice(i, 1);
});

console.log('valid: ', valid);

// Задача 3
const str = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять 
  из шпината, гречки и вареной куриной грудки. Самыми лучшими способами
  приготовления еды (по мнению моей мамы) являются следующие: варка на пару,
  запекание или варка в воде. Помимо стандартных мандаринов и ананасов,
  отличным украшением любого стола станут необычные, экзотические фрукты
  (например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка,
  если она приготовлена на пару`;

const regexp2 = /\(.+?\)/g;

const test = str.match(regexp2);
console.log('test: ', test);

// Задача 4
const str2 = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять 
  из шпината, гречки и вареной куриной грудки. Самыми лучшими способами  https://site.com
  приготовления еды (по мнению моей мамы) являются следующие: варка на пару,
  запекание или варка в воде. http://site.ru Помимо стандартных мандаринов и ананасов,
  отличным украшением любого стола станут необычные, https://site.com экзотические фрукты
  (например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка,
  если она приготовлена на пару`;

const foo = str => {
  const newStr = str.replace(/http:\/\/site.ru/g, `<a href="http://site.ru/">site.ru</a>`);
  const newStr2 = newStr.replace(/https:\/\/site.com/g, `<a href="https://site.com/">site.com</a>`);
  return newStr2;
};

console.log(foo(str2));

